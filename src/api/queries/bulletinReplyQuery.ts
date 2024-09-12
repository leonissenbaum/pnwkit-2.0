import { Kit } from '../..';
import { bulletinReplies, bulletinRepliesPaginator, queryBulletinRepliesOrderByOrderByClause, queryBulletinReplyArgs } from '../../interfaces/queries/bulletinReplies';
import GraphQL from '../../services/GraphQL';

export interface Parameters {
id?: number[];
min_id?: number;
max_id?:  number;
bulletin_id?: number;
bulletin_min_id?: number;
bulletin_max_id?: number;
before?: Date;
after?: Date;
edited_before?: Date;
edited_since?: Date;
nation_id?: number[];
leader_name?: string;
nation_name?: string;
orderBy?: queryBulletinRepliesOrderByOrderByClause
first: number
page?: number;
}

/**
 * Gets a list of bulletins
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean?} paginator Deliver the data in a paginated format
 * @returns {Promise<bulletinReplies[] | bulletinRepliesPaginator>} The bulletin replies queried or as paginated
 */
export default async function bulletinReplyQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<bulletinReplies[]>;
export default async function bulletinReplyQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<bulletinRepliesPaginator>;
export default async function bulletinReplyQuery(
  this: Kit,
  params: Parameters,
  query: string,
  paginator?: boolean,
): Promise<bulletinRepliesPaginator | bulletinReplies[]> {
  const argsToParameters = GraphQL.generateParameters(params as queryBulletinReplyArgs);

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

  if (paginator) return res.data.bulletin_replies as bulletinRepliesPaginator;

  return res.data.bulletin_replies.data as bulletinReplies[];
}
