import { Kit } from '../..';
import { alliance, alliancePaginator, queryAlliancesArgs, queryAlliancesOrderByOrderByClause } from '../../interfaces/queries/alliance';
import GraphQL from '../../services/GraphQL';

export interface Parameters {
  id?: number[];
  name?: string[];
  color?: string;
  orderBy?: queryAlliancesOrderByOrderByClause;
  first: number;
  page?: number;
}

/**
 * Gets a list of alliances
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean?} paginator Deliver the data in a paginated format
 * @returns {Promise<alliance[] | alliancePaginator>} The alliances queried or as paginated
 */
export default async function allianceQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<alliance[]>;
export default async function allianceQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<alliancePaginator>;
export default async function allianceQuery(
  this: Kit,
  params: Parameters,
  query: string,
  paginator?: boolean,
): Promise<alliancePaginator | alliance[]> {
  const argsToParameters = GraphQL.generateParameters(params as queryAlliancesArgs);

  const res = await GraphQL.makeCall(`
    {
      alliances${argsToParameters} {
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

  if (paginator) return res.data.alliances as alliancePaginator;

  return res.data.alliances.data as alliance[];
}
