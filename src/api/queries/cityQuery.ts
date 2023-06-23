import { Kit } from '../..';
import { city, cityPaginator, queryCitiesArgs, queryCitiesOrderByOrderByClause } from '../../interfaces/queries/city';

import GraphQL from '../../services/GraphQL';

export interface Parameters {
    id?: number[];
    nation_id?: number[];
    orderBy?: queryCitiesOrderByOrderByClause;
    first?: number;
    page?: number;
}

/**
 * Gets a list of cities
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean} paginator If true it will return paginator info
 * @return {Promise<city[] | cityPaginator>}
 */
export default async function cityQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<city[]>;
export default async function cityQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<cityPaginator>;
export default async function cityQuery(
    this: Kit,
    params: Parameters,
    query: string,
    paginator?: boolean,
): Promise<city[] | cityPaginator> {
    const argsToParameters = GraphQL.generateParameters(params as queryCitiesArgs);

    const res = await GraphQL.makeCall(`
    {
      cities${argsToParameters} {
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
        return res.data.cities as cityPaginator;
    }

    return res.data.cities.data as city[];
}
