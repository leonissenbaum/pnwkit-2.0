import { Kit } from '../..';
import { activityStat, activityStatPaginator, queryActivityStatsOrderByOrderByClause } from '../../interfaces/queries/activityStat';
export interface Parameters {
    before?: Date;
    after?: Date;
    orderBy?: queryActivityStatsOrderByOrderByClause;
    first: number;
    page?: number;
}
/**
 * Gets a list of activity statistics
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean?} paginator Deliver the data in a paginated format
 * @returns {Promise<activityStat[] | activityStatPaginator>} The activity stats queried or as paginated
 */
export default function activityStatQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<activityStat[]>;
export default function activityStatQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<activityStatPaginator>;
