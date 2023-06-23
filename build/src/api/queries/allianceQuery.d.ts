import { Kit } from '../..';
import { alliance, alliancePaginator, queryAlliancesOrderByOrderByClause } from '../../interfaces/queries/alliance';
export interface Parameters {
    id?: number[];
    name?: string[];
    color?: string;
    orderBy?: queryAlliancesOrderByOrderByClause;
    first: number;
    page?: number;
}
/**
 * Gets a list of alliances
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean?} paginator Deliver the data in a paginated format
 * @returns {Promise<alliance[] | alliancePaginator>} The alliances queried or as paginated
 */
export default function allianceQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<alliance[]>;
export default function allianceQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<alliancePaginator>;
