import { Kit } from '../..';
import { embargo, embargoPaginator, queryEmbargoesArgs, queryEmbargoesOrderByOrderByClause } from '../../interfaces/queries/embargo';
import GraphQL from '../../services/GraphQL';

export interface Parameters {
    id?: number[];
    nation_id?: number[];
    min_id?: number[];
    max_id?: number[];
    orderBy?: queryEmbargoesOrderByOrderByClause;
    first?: number;
    page?: number;
}

/**
 * Gets a list of embargoes
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean?} paginator Deliver the data in a paginated format
 * @returns {Promise<embargo[] | embargoPaginator>} The nations queried or as paginated
 */
export default async function embargoQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<embargo[]>;
export default async function embargoQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<embargoPaginator>;
export default async function embargoQuery(
    this: Kit,
    params: Parameters,
    query: string,
    paginator?: boolean,
): Promise<embargoPaginator | embargo[]> {
    const argsToParameters = GraphQL.generateParameters(params as queryEmbargoesArgs);

    const res = await GraphQL.makeCall(`
    {
      embargoes${argsToParameters} {
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

    if (paginator) return res.data.embargoes as embargoPaginator;

    return res.data.embargoes.data as embargo[];
}
