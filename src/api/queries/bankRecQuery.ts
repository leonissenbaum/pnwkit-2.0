import { Kit } from '../..';
import { bankrec, bankrecPaginator, queryBankrecsArgs, queryBankrecsOrderByOrderByClause } from '../../interfaces/queries/bank';
import GraphQL from '../../services/GraphQL';

export interface Parameters {
    id?: number[];
    min_id?: number;
    max_id?: number;
    before?: Date;
    after?: Date;
    stype?: number[];
    rtype?: number[];
    or_type?: number;
    sid?: number;
    rid?: number;
    or_id?: number;
    orderBy?: queryBankrecsOrderByOrderByClause;
    first?: number;
    page?: number;
}

/**
 * Gets a list of bank records
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean} paginator If true it will return paginator info
 * @return {Promise<Bankrec[] | BankrecPaginator>}
 */

export default async function bankRecordsQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<bankrec[]>;
export default async function bankRecordsQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<bankrecPaginator>;
export default async function bankRecordsQuery(
    this: Kit,
    params: Parameters,
    query: string,
    paginator?: boolean,
): Promise<bankrec[] | bankrecPaginator> {
    const argsToParameters = GraphQL.generateParameters(params as queryBankrecsArgs);

    const res = await GraphQL.makeCall(`
    {
      bankrecs${argsToParameters} {
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
        return res.data.bankrecs;
    }

    return res.data.bankrecs.data as bankrec[];
}
