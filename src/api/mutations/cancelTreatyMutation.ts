import { Kit } from '../..';
import { cancelTreatyPaginator, mutationCancelTreatyArgs } from '../../interfaces/mutations/cancelTreaty';
import { treaty } from '../../interfaces/queries/treaty';
import GraphQL from '../../services/GraphQL';

export interface Parameters {
    id: string;
}

/**
 * Cancel a treaty for your alliance
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean} paginator If true it will return paginator info
 * @return {Promise<treaty | cancelTreatyPaginator>}
 */
export default async function cancelTreatyMutation(this: Kit, params: Parameters, query: string, paginator?: false): Promise<treaty>;
export default async function cancelTreatyMutation(this: Kit, params: Parameters, query: string, paginator: true): Promise<cancelTreatyPaginator>;
export default async function cancelTreatyMutation(
    this: Kit,
    params: Parameters,
    query: string,
    paginator?: boolean,
): Promise<treaty | cancelTreatyPaginator> {
    const argsToParameters = GraphQL.generateParameters(params as mutationCancelTreatyArgs);

    const res = await GraphQL.makeMutationCall(`
    mutation {
        cancelTreaty${argsToParameters} {
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

        ${query}

      }
    }
  `,
        this.apiKey,
        this.botKey,
    );

    this.setRateLimit(res.rateLimit);

    if (paginator) {
        return res.data.cancelTreaty as cancelTreatyPaginator;
    }

    return res.data.cancelTreaty as treaty;
}
