import { Kit } from "../..";
import { baseballPlayerPaginator, baseballPlayer, queryBaseballPlayersArgs, queryBaseballPlayersOrderByOrderByClause } from "../../interfaces/queries/baseball";
import GraphQL from "../../services/GraphQL";


export interface Parameters {
  id?: number[];
  team_id?: number[];
  orderBy?: queryBaseballPlayersOrderByOrderByClause;
  first: number
  page?: number;
}

/**
 * Gets a list of baseball players
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean?} paginator Deliver the data in a paginated format
 * @returns {Promise<baseballPlayer[] | baseballPlayerPaginator>} The baseball players queried or as paginated
 */
export default async function baseballPlayerQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<baseballPlayer[]>;
export default async function baseballPlayerQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<baseballPlayerPaginator>;
export default async function baseballPlayerQuery(
  this: Kit,
  params: Parameters,
  query: string,
  paginator?: boolean,
): Promise<baseballPlayerPaginator | baseballPlayer[]> {
  const argsToParameters = GraphQL.generateParameters(params as queryBaseballPlayersArgs);

  const res = await GraphQL.makeCall(`
    {
       baseball_players${argsToParameters} {
        ${(paginator) ?
      `
          paginatorInfo {
            count,
            currentPage,
            firstItem,
            hasMorePages,
            lastItem,
            lastPage,
            perPage,
            total
          },
          `: ''
    }
        data {
          ${query}
        }
      }
    }
  `, this.apiKey);

  this.setRateLimit(res.rateLimit);

  if (paginator) return res.data.baseball_players$ as baseballPlayerPaginator;

  return res.data.baseball_players.data as baseballPlayer[];
}
