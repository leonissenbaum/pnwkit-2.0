import { Kit } from '../..';
import { bounty, bountyPaginator, queryBountiesArgs, queryBountiesOrderByOrderByClause } from '../../interfaces/queries/bounty';
import GraphQL from '../../services/GraphQL';

export interface Parameters {
  nation_id?: number[];
  min_amount?: number;
  max_amount?: number;
  orderBy?: queryBountiesOrderByOrderByClause;
  first?: number;
  page?: number;
}

/**
 * Gets a list of bounties
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean} paginator If true it will return paginator info
 * @return {Promise<bounty[] | bountyPaginator>}
 */
export default async function bountyQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<bounty[]>;
export default async function bountyQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<bountyPaginator>;
export default async function bountyQuery(
  this: Kit,
  params: Parameters,
  query: string,
  paginator?: boolean,
): Promise<bounty[] | bountyPaginator> {
  const argsToParameters = GraphQL.generateParameters(params as queryBountiesArgs);

  const res = await GraphQL.makeCall(`
    {
      bounties${argsToParameters} {
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
    return res.data.bounties as bountyPaginator;
  }

  return res.data.bounties.data as bounty[];
}
