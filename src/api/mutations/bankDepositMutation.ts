import { Kit } from '../..';
import { mutationbankDepositArgs, bankDepositPaginator } from '../../interfaces/mutations/bankDeposit';
import { bankrec } from '../../interfaces/queries/bank';
import GraphQL from '../../services/GraphQL';

export interface Parameters {
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
 * Deposit resources into your bank
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean} paginator If true it will return paginator info
 * @return {Promise<bankrec | bankDepositPaginator>}
 */
export default async function bankDepositMutation(this: Kit, params: Parameters, query: string, apiKey: string, paginator?: false): Promise<bankrec>;
export default async function bankDepositMutation(this: Kit, params: Parameters, query: string, apiKey: string, paginator: true): Promise<bankDepositPaginator>;
export default async function bankDepositMutation(
  this: Kit,
  params: Parameters,
  query: string,
  apiKey: string,
  paginator?: boolean,
): Promise<bankrec | bankDepositPaginator> {
  const argsToParameters = GraphQL.generateParameters(params as mutationbankDepositArgs);

  const res = await GraphQL.makeMutationCall(`
    mutation {
       bankDeposit${argsToParameters} {
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
    apiKey,
    this.botKey,
  );

  this.setRateLimit(res.rateLimit);

  if (paginator)
    return res.data.bankDeposit as bankDepositPaginator;


  return res.data.bankDeposit as bankrec;
}
