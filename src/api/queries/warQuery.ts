import { Kit } from '../..';
import { queryWarsArgs, queryWarsOrderByOrderByClause, war, warPaginator } from '../../interfaces/queries/war';
import GraphQL from '../../services/GraphQL';

export interface Parameters {
  id?: number[];
  min_id?: number;
  max_id?: number;
  before?: Date;
  after?: Date;
  days_ago?: number;
  active?: boolean;
  nation_id?: number[];
  alliance_id?: number[];
  orderBy?: queryWarsOrderByOrderByClause
  first?: number;
  page?: number;
}

/**
 * Gets a list of wars
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean} paginator if true it will return paginator info
 * @return {Promise<war[] | warPaginator>}
 */
export default async function warQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<war[]>;
export default async function warQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<warPaginator>;
export default async function warQuery(
  this: Kit,
  params: Parameters,
  query: string,
  paginator?: boolean,
): Promise<war[] | warPaginator> {
  const argsToParameters = GraphQL.generateParameters(params as queryWarsArgs);

  const res = await GraphQL.makeCall(`
    {
      wars${argsToParameters} {
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

  if (paginator) {
    return res.data.wars as warPaginator;
  }

  return res.data.wars.data as war[];
}
