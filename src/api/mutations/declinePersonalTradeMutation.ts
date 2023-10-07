import { Kit } from '../..';
import { declinePersonalTradePaginator, mutationDeclinePersonalTradeArgs } from '../../interfaces/mutations/personalTrade';
import { trade } from '../../interfaces/queries/trade';
import GraphQL from '../../services/GraphQL';

export interface Parameters {
  id: number;
}

/**
 * decline a personal trade
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean} paginator If true it will return paginator info
 * @return {Promise<trade | declinePersonalTradePaginator>}
 */
export default async function declinePersonalTradeMutation(this: Kit, params: Parameters, query: string, apiKey: string, paginator?: false): Promise<trade>;
export default async function declinePersonalTradeMutation(this: Kit, params: Parameters, query: string, apiKey: string, paginator: true): Promise<declinePersonalTradePaginator>;
export default async function declinePersonalTradeMutation(
  this: Kit,
  params: Parameters,
  query: string,
  apiKey: string,
  paginator?: boolean,
): Promise<trade | declinePersonalTradePaginator> {
  const argsToParameters = GraphQL.generateParameters(params as mutationDeclinePersonalTradeArgs);

  const res = await GraphQL.makeMutationCall(`
    mutation {
        declinePersonalTrade${argsToParameters} {
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
    return res.data.declinePersonalTrade as declinePersonalTradePaginator;


  return res.data.declinePersonalTrade as trade;
}
