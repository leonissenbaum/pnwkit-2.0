import { Kit } from '../..';
import { activityStat, activityStatPaginator, queryActivityStatsArgs, queryActivityStatsOrderByOrderByClause } from '../../interfaces/queries/activityStat';
import GraphQL from '../../services/GraphQL';

export interface Parameters {
  before?: Date;
  after?: Date;
  orderBy?: queryActivityStatsOrderByOrderByClause;
  first: number;
  page?: number;
}

/**
 * Gets a list of activity statistics
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean?} paginator Deliver the data in a paginated format
 * @returns {Promise<activityStat[] | activityStatPaginator>} The activity stats queried or as paginated
 */
export default async function activityStatQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<activityStat[]>;
export default async function activityStatQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<activityStatPaginator>;
export default async function activityStatQuery(
  this: Kit,
  params: Parameters,
  query: string,
  paginator?: boolean,
): Promise<activityStatPaginator | activityStat[]> {
  const argsToParameters = GraphQL.generateParameters(params as queryActivityStatsArgs);

  const res = await GraphQL.makeCall(`
    {
        activity_stats${argsToParameters} {
        ${(paginator) ?
      `
          paginatorInfo {
            count,
            currentPage,
            firstItem,
            hasMorePages,
            lastItem,
            lastPage,
            perPage,
            total
          },
          `: ''
    }
        data {
          ${query}
        }
      }
    }
  `, this.apiKey);

  this.setRateLimit(res.rateLimit);

  if (paginator) return res.data.activity_stats as activityStatPaginator;

  return res.data.activity_stats.data as activityStat[];
}
