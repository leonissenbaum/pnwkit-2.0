import { Kit } from '../..';
import { queryTradepricesArgs, tradeprice, tradePricePaginator } from '../../interfaces/queries/tradePrice';
import GraphQL from '../../services/GraphQL';

export interface Parameters {
    first?: number;
    page?: number;
}

/**
 * Gets a list of trade prices
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean} paginator If true, returns paginator information
 * @return {Promise<tradeprice[] | tradepricePaginator>}
 */
export default async function tradePricesQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<tradeprice[]>;
export default async function tradePricesQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<tradePricePaginator>;
export default async function tradePricesQuery(
    this: Kit,
    params: Parameters,
    query: string,
    paginator?: boolean,
): Promise<tradeprice[] | tradePricePaginator> {
    const argsToParameters = GraphQL.generateParameters(params as queryTradepricesArgs);

    const res = await GraphQL.makeCall(`
    {
      tradeprices${argsToParameters} {
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
        return res.data.tradeprices as tradePricePaginator;
    }

    return res.data.tradeprices.data as tradeprice[];
}
