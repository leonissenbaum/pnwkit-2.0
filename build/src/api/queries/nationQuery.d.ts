import { Kit } from '../..';
import { nation, nationPaginator, queryNationsOrderByOrderByClause } from '../../interfaces/queries/nation';
export interface Parameters {
    id?: number[];
    nation_name?: string[];
    leader_name?: string[];
    alliance_id?: number[];
    alliance_position?: number[];
    alliance_position_id?: number[];
    color?: string[];
    created_after?: Date;
    min_score?: number;
    max_score?: number;
    cities?: number[];
    min_cities?: number;
    max_cities?: number;
    vmode?: boolean;
    discord?: string[];
    discord_id?: string[];
    tax_id?: number[];
    orderBy?: queryNationsOrderByOrderByClause;
    first: number;
    page?: number;
}
/**
 * Gets a list of nations
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean?} paginator Deliver the data in a paginated format
 * @returns {Promise<nation[] | nationPaginator>} The nations queried or as paginated
 */
export default function nationQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<nation[]>;
export default function nationQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<nationPaginator>;
