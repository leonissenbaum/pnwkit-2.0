import { Kit } from '../..';
import { bannedNation, bannedNationPaginator, queryBannedNationArgs, queryBannedNationsOrderByOrderByClause } from '../../interfaces/queries/bannedNation';
import GraphQL from '../../services/GraphQL';

export interface Parameters {
    nation_id?: number[];
    leader_name?: string[];
    nation_name?: string[];
    first: number;
    orderBy?: queryBannedNationsOrderByOrderByClause
    page?: number;
}

/**
 * Gets a list of bank records
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean} paginator If true it will return paginator info
 * @return {Promise<bannedNation[] | bannedNationPaginator>}
 */

export default async function bannedNationQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<bannedNation[]>;
export default async function bannedNationQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<bannedNationPaginator>;
export default async function bannedNationQuery(
    this: Kit,
    params: Parameters,
    query: string,
    paginator?: boolean,
): Promise<bannedNation[] | bannedNationPaginator> {
    const argsToParameters = GraphQL.generateParameters(params as queryBannedNationArgs);

    const res = await GraphQL.makeCall(`
    {
    banned_nations${argsToParameters} {
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
        return res.data.banned_nations as bannedNationPaginator;
    }

    return res.data.banned_nations.data as bannedNation[];
}
