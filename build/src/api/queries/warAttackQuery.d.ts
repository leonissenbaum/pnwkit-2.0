import { Kit } from '../..';
import { queryWarattacksOrderByOrderByClause, warAttack, warAttackPaginator } from '../../interfaces/queries/warAttack';
export interface Parameters {
    id?: number[];
    min_id?: number;
    max_id?: number;
    war_id?: number[];
    before?: Date;
    after?: Date;
    orderBy?: queryWarattacksOrderByOrderByClause;
    first?: number;
    page?: number;
}
/**
 * Gets a list of war attacks
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean} paginator If true it will return paginator info
 * @return {Promise<warAttack[] | warAttackPaginator>} The attacks queried or as paginated
 */
export default function warAttackQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<warAttack[]>;
export default function warAttackQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<warAttackPaginator>;
