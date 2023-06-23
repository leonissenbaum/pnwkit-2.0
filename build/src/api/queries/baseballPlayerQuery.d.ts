import { Kit } from "../..";
import { baseballPlayerPaginator, baseballPlayer, queryBaseballPlayersOrderByOrderByClause } from "../../interfaces/queries/baseball";
export interface Parameters {
    id?: number[];
    team_id?: number[];
    orderBy?: queryBaseballPlayersOrderByOrderByClause;
    first: number;
    page?: number;
}
/**
 * Gets a list of baseball players
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean?} paginator Deliver the data in a paginated format
 * @returns {Promise<baseballPlayer[] | baseballPlayerPaginator>} The baseball players queried or as paginated
 */
export default function baseballPlayerQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<baseballPlayer[]>;
export default function baseballPlayerQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<baseballPlayerPaginator>;
