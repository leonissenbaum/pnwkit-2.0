import { Kit } from "../..";
import { baseballTeam, baseballTeamPaginator, queryBaseballTeamsOrderByOrderByClause } from "../../interfaces/queries/baseball";
export interface Parameters {
    id?: number[];
    orderBy?: queryBaseballTeamsOrderByOrderByClause;
    first: number;
    page?: number;
}
/**
 * Gets a list of baseball teams
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean?} paginator Deliver the data in a paginated format
 * @returns {Promise<baseballTeam[] | baseballTeamPaginator>} The baseball teams queried or as paginated
 */
export default function baseballTeamQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<baseballTeam[]>;
export default function baseballTeamQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<baseballTeamPaginator>;
