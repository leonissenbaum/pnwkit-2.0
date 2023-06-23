import { Kit } from '../..';
import { embargo, embargoPaginator, queryEmbargoesOrderByOrderByClause } from '../../interfaces/queries/embargo';
export interface Parameters {
    id?: number[];
    nation_id?: number[];
    min_id?: number[];
    max_id?: number[];
    orderBy?: queryEmbargoesOrderByOrderByClause;
    first?: number;
    page?: number;
}
/**
 * Gets a list of embargoes
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean?} paginator Deliver the data in a paginated format
 * @returns {Promise<embargo[] | embargoPaginator>} The nations queried or as paginated
 */
export default function embargoQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<embargo[]>;
export default function embargoQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<embargoPaginator>;
