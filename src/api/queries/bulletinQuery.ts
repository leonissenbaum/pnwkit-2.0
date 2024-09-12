import { Kit } from '../..';
import { bulletin, bulletinPaginator, queryBulletinArgs, queryBulletinsOrderByOrderByClause } from '../../interfaces/queries/bulletin';
import GraphQL from '../../services/GraphQL';

export interface Parameters {
id?: number[];
min_id?: number;
max_id?:  number;
before?: Date;
after?: Date;
edited_before?: Date;
edited_since?: Date;
nation_id?: number[];
type?: number;
alliance_id?: number[];
orderBy?: queryBulletinsOrderByOrderByClause
first: number
page?: number;
}

/**
 * Gets a list of bulletins
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean?} paginator Deliver the data in a paginated format
 * @returns {Promise<bulletin[] | bulletinPaginator>} The bulletins queried or as paginated
 */
export default async function bulletinQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<bulletin[]>;
export default async function bulletinQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<bulletinPaginator>;
export default async function bulletinQuery(
  this: Kit,
  params: Parameters,
  query: string,
  paginator?: boolean,
): Promise<bulletinPaginator | bulletin[]> {
  const argsToParameters = GraphQL.generateParameters(params as queryBulletinArgs);

  const res = await GraphQL.makeCall(`
    {
      nations${argsToParameters} {
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

  if (paginator) return res.data.bulletins as bulletinPaginator;

  return res.data.bulletins.data as bulletin[];
}
