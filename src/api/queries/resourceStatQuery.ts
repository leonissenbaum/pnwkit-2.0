import { Kit } from '../..';
import { queryResourceStatsArgs, queryResourceStatsOrderByOrderByClause, resourceStat, resourceStatPaginator } from '../../interfaces/queries/resourceStat';
import GraphQL from '../../services/GraphQL';

export interface Parameters {
    before?: Date;
    after?: Date;
    orderBy?: queryResourceStatsOrderByOrderByClause;
    first: number;
    page?: number;
}

/**
 * Gets a list of resources statistics
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean?} paginator Deliver the data in a paginated format
 * @returns {Promise<resourceStat[] | resourceStatPaginator>} The resource stats queried or as paginated
 */
export default async function resourceStatQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<resourceStat[]>;
export default async function resourceStatQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<resourceStatPaginator>;
export default async function resourceStatQuery(
    this: Kit,
    params: Parameters,
    query: string,
    paginator?: boolean,
): Promise<resourceStatPaginator | resourceStat[]> {
    const argsToParameters = GraphQL.generateParameters(params as queryResourceStatsArgs);

    const res = await GraphQL.makeCall(`
    {
        resource_stats${argsToParameters} {
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

    if (paginator) return res.data.activity_stats as resourceStatPaginator;

    return res.data.activity_stats.data as resourceStat[];
}
