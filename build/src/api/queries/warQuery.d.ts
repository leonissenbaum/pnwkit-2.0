import { Kit } from '../..';
import { queryWarsOrderByOrderByClause, war, warPaginator } from '../../interfaces/queries/war';
export interface Parameters {
    id?: number[];
    min_id?: number;
    max_id?: number;
    before?: Date;
    after?: Date;
    days_ago?: number;
    active?: boolean;
    nation_id?: number[];
    alliance_id?: number[];
    orderBy?: queryWarsOrderByOrderByClause;
    first?: number;
    page?: number;
}
/**
 * Gets a list of wars
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean} paginator if true it will return paginator info
 * @return {Promise<war[] | warPaginator>}
 */
export default function warQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<war[]>;
export default function warQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<warPaginator>;
