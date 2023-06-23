import { Kit } from '../..';
import { queryTreatiesOrderByOrderByClause, treaty, treatyPaginator } from '../../interfaces/queries/treaty';
export interface Parameters {
    id?: number[];
    orderBy?: queryTreatiesOrderByOrderByClause;
    first?: number;
    page?: number;
}
/**
 * Gets a list of treaties
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean?} paginator Deliver the data in a paginated format
 * @returns {Promise<treaty[] | treatyPaginator>} The treaties queried or as paginated
 */
export default function treatyQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<treaty[]>;
export default function treatyQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<treatyPaginator>;
