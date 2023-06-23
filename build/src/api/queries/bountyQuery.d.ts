import { Kit } from '../..';
import { bounty, bountyPaginator, queryBountiesOrderByOrderByClause } from '../../interfaces/queries/bounty';
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
export default function bountyQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<bounty[]>;
export default function bountyQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<bountyPaginator>;
