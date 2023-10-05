import { Kit } from '../..';
import { topTradeInfo, topTradeInfoPaginator } from '../../interfaces/queries/topTradeInfo';
import GraphQL from '../../services/GraphQL';

/**
 * Gets a list of trade prices
 * @param {string} query The graphql query to get info with
 * @param {boolean} paginator If true, returns paginator information
 * @return {Promise<topTradeInfo | topTradeInfoPaginator>}
 */
export default async function topTradeInfoQuery(this: Kit, query: string, paginator?: false): Promise<topTradeInfo>;
export default async function topTradeInfoQuery(this: Kit, query: string, paginator: true): Promise<topTradeInfoPaginator>;
export default async function topTradeInfoQuery(
    this: Kit,
    query: string,
    paginator?: boolean,
): Promise<topTradeInfo | topTradeInfoPaginator> {

    const res = await GraphQL.makeCall(`
    {
    top_trade_info {
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
  `, this.apiKey);

    this.setRateLimit(res.rateLimit);

    if (paginator) {
        return res.data as topTradeInfoPaginator;
    }

    return res.data.top_trade_info as topTradeInfo;
}
