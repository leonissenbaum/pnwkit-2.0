import { Kit } from '../..';
import { baseballGame, baseballGamePaginator, queryBaseballGamesArgs, queryBaseballGamesOrderByOrderByClause } from '../../interfaces/queries/baseball';
import GraphQL from '../../services/GraphQL';

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
  first: number
  page?: number;
}

/**
 * Gets a list of baseball games
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean?} paginator Deliver the data in a paginated format
 * @returns {Promise<baseballGame[] | baseballGamePaginator>} The baseball games queried or as paginated
 */
export default async function baseballGameQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<baseballGame[]>;
export default async function baseballGameQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<baseballGamePaginator>;
export default async function baseballGameQuery(
  this: Kit,
  params: Parameters,
  query: string,
  paginator?: boolean,
): Promise<baseballGamePaginator | baseballGame[]> {
  const argsToParameters = GraphQL.generateParameters(params as queryBaseballGamesArgs);

  const res = await GraphQL.makeCall(`
    {
       baseball_games${argsToParameters} {
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

  if (paginator) return res.data.baseball_games as baseballGamePaginator;

  return res.data.baseball_games.data as baseballGame[];
}
