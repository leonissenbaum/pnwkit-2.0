import { Kit } from '../../..';
import { mutationProposeTreatyArgs, proposeTreatyPaginator } from '../../interfaces/mutations/proposeTreaty';
import { treaty } from '../../interfaces/queries/treaty';
import GraphQL from '../../services/GraphQL';

export interface Parameters {
    alliance_id: string;
    length: number;
    type: string;
    url: string
}

/**
 * Approve a treaty for your alliance
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean} paginator If true it will return paginator info
 * @return {Promise<treaty | proposeTreatyPaginator>}
 */
export default async function proposeTreatyMutation(this: Kit, params: Parameters, query: string, paginator?: false): Promise<treaty>;
export default async function proposeTreatyMutation(this: Kit, params: Parameters, query: string, paginator: true): Promise<proposeTreatyPaginator>;
export default async function proposeTreatyMutation(
    this: Kit,
    params: Parameters,
    query: string,
    paginator?: boolean,
): Promise<treaty | proposeTreatyPaginator> {
    const argsToParameters = GraphQL.generateParameters(params as mutationProposeTreatyArgs);

    const res = await GraphQL.makeMutationCall(`
    mutation {
        proposeTreaty${argsToParameters} {
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
        return res.data.proposeTreaty as proposeTreatyPaginator;
    }

    return res.data.proposeTreaty as treaty;
}
