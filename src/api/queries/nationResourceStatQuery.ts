import { Kit } from '../..';
import { nationResourceStat, nationResourceStatPaginator, queryNationResourceStatsArgs, queryNationResourceStatsOrderByOrderByClause } from '../../interfaces/queries/nationResourceStat';
import GraphQL from '../../services/GraphQL';

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
  vmode?: boolean
  discord?: string[];
  discord_id?: string[];
  tax_id?: number[];
  orderBy?: queryNationResourceStatsOrderByOrderByClause
  first: number
  page?: number;
}

/**
 * Gets a list of nations
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean?} paginator Deliver the data in a paginated format
 * @returns {Promise<nationResourceStat[] | nationResourceStatPaginator>} The nations queried or as paginated
 */
export default async function nationResourceStatQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<nationResourceStat[]>;
export default async function nationResourceStatQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<nationResourceStatPaginator>;
export default async function nationResourceStatQuery(
  this: Kit,
  params: Parameters,
  query: string,
  paginator?: boolean,
): Promise<nationResourceStatPaginator | nationResourceStat[]> {
  const argsToParameters = GraphQL.generateParameters(params as queryNationResourceStatsArgs);

  const res = await GraphQL.makeCall(`
    {
      nation_resource_stats{argsToParameters} {
          ${query}
      }
    }
  `, this.apiKey);

  this.setRateLimit(res.rateLimit);

  return res.data.nation_resource_stats as nationResourceStat[];
}
