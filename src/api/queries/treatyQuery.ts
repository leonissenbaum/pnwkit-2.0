import { Kit } from '../..';
import { queryTreatiesArgs, queryTreatiesOrderByOrderByClause, treaty, treatyPaginator } from '../../interfaces/queries/treaty';
import GraphQL from '../../services/GraphQL';

export interface Parameters {
    id?: number[];
    orderBy?: queryTreatiesOrderByOrderByClause;
    first?: number;
    page?: number;
}

/**
 * Gets a list of treaties
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean?} paginator Deliver the data in a paginated format
 * @returns {Promise<treaty[] | treatyPaginator>} The treaties queried or as paginated
 */
export default async function treatyQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<treaty[]>;
export default async function treatyQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<treatyPaginator>;
export default async function treatyQuery(
    this: Kit,
    params: Parameters,
    query: string,
    paginator?: boolean,
): Promise<treatyPaginator | treaty[]> {
    const argsToParameters = GraphQL.generateParameters(params as queryTreatiesArgs);

    const res = await GraphQL.makeCall(`
    {
      treaties${argsToParameters} {
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

    if (paginator) return res.data.embargoes as treatyPaginator;

    return res.data.treaties.data as treaty[];
}
