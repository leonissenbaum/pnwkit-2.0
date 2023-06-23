import { Kit } from '../..';
import { baseballGame, baseballGamePaginator, queryBaseballGamesOrderByOrderByClause } from '../../interfaces/queries/baseball';
export interface Parameters {
    id?: number[];
    min_id?: number;
    max_id?: number;
    team_id?: number[];
    orderBy?: queryBaseballGamesOrderByOrderByClause;
    open?: boolean;
    min_wager?: number;
    max_wager?: number;
    wager?: number[];
    first: number;
    page?: number;
}
/**
 * Gets a list of baseball games
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean?} paginator Deliver the data in a paginated format
 * @returns {Promise<baseballGame[] | baseballGamePaginator>} The baseball games queried or as paginated
 */
export default function baseballGameQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<baseballGame[]>;
export default function baseballGameQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<baseballGamePaginator>;
