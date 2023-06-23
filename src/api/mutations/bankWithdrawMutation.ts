import { Kit } from '../..';
import { bankWithdrawPaginator, mutationBankWithdrawArgs } from '../../interfaces/mutations/bankWithdraw';
import { bankrec } from '../../interfaces/queries/bank';
import GraphQL from '../../services/GraphQL';

export interface Parameters {
    receiver: number;
    receiver_type: number;
    money?: number;
    coal?: number;
    oil?: number;
    uranium?: number;
    iron?: number;
    bauxite?: number;
    lead?: number;
    gasoline?: number;
    munitions?: number;
    steel?: number;
    aluminum?: number;
    food?: number;
    note?: string;
}

/**
 * Withdraw resources into your bank
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean} paginator If true it will return paginator info
 * @return {Promise<bankrec | bankWithdrawPaginator>}
 */
export default async function bankWithdrawMutation(this: Kit, params: Parameters, query: string, paginator?: false): Promise<bankrec>;
export default async function bankWithdrawMutation(this: Kit, params: Parameters, query: string, paginator: true): Promise<bankWithdrawPaginator>;
export default async function bankWithdrawMutation(
    this: Kit,
    params: Parameters,
    query: string,
    paginator?: boolean,
): Promise<bankrec | bankWithdrawPaginator> {
    const argsToParameters = GraphQL.generateParameters(params as mutationBankWithdrawArgs);

    const res = await GraphQL.makeMutationCall(`
    mutation {
       bankWithdraw${argsToParameters} {
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
        
        ${query}
        
      }
    }
  `,
        this.apiKey,
        this.botKey,
    );

    this.setRateLimit(res.rateLimit);

    if (paginator) {
        return res.data.bankWithdraw as bankWithdrawPaginator;
    }

    return res.data.bankWithdraw as bankrec;
}
