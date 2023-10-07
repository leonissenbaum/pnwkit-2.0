import { Kit } from '../..';
import { acceptPersonalTradePaginator, mutationacceptPersonalTradeArgs } from '../../interfaces/mutations/personalTrade';
import { trade } from '../../interfaces/queries/trade';
import GraphQL from '../../services/GraphQL';

export interface Parameters {
  id: number;
  offer_amount: number;
}

/**
 * accept a personal trade
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean} paginator If true it will return paginator info
 * @return {Promise<trade| acceptPersonalTradePaginator>}
 */
export default async function acceptPersonalTradeMutation(this: Kit, params: Parameters, query: string, apiKey: string, paginator?: false): Promise<trade>;
export default async function acceptPersonalTradeMutation(this: Kit, params: Parameters, query: string, apiKey: string, paginator: true): Promise<acceptPersonalTradePaginator>;
export default async function acceptPersonalTradeMutation(
  this: Kit,
  params: Parameters,
  query: string,
  apiKey: string,
  paginator?: boolean,
): Promise<trade | acceptPersonalTradePaginator> {
  const argsToParameters = GraphQL.generateParameters(params as mutationacceptPersonalTradeArgs);

  const res = await GraphQL.makeMutationCall(`
    mutation {
        acceptPersonalTrade${argsToParameters} {
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
    return res.data.acceptPersonalTrade as acceptPersonalTradePaginator;


  return res.data.acceptPersonalTrade as trade;
}
