import {Kit} from '../..';
import { queryTradesArgs, queryTradesOrderByOrderByClause, trade, tradePaginator, tradeType } from '../../interfaces/queries/trade';
import GraphQL from '../../services/GraphQL';

export interface Parameters {
  id?: number[];
  min_id?: number;
  max_id?: number;
  before?: Date;
  after?: Date;
  type?: tradeType | string;
  nation_id?: number[];
  offer_resource?: string;
  buy_or_sell?: string;
  accepted?: boolean;
  orderBy?: queryTradesOrderByOrderByClause
  first: number;
  page?: number;
}

/**
 * Gets a list of trades
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean} paginator If true returns paginator info
 * @return {Promise<trade[] | tradePaginator>}
 */
export default async function tradeQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<trade[]>;
export default async function tradeQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<tradePaginator>;
export default async function tradeQuery(
    this: Kit,
    params: Parameters,
    query: string,
    paginator?: boolean,
): Promise<trade[] | tradePaginator> {
  const argsToParameters = GraphQL.generateParameters(params as queryTradesArgs, ['type']);

  const res = await GraphQL.makeCall(`
    {
      trades${argsToParameters} {
        ${
    (paginator) ?
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
          `:''
}
        data {
          ${query}
        }
      }
    }
  `, this.apiKey);

  this.setRateLimit(res.rateLimit);

  if (paginator) {
    return res.data.trades as tradePaginator;
  }

  return res.data.trades.data as trade[];
}
