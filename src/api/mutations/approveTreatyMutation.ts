import { Kit } from '../..';
import { approveTreatyPaginator, mutationApproveTreatyArgs } from '../../interfaces/mutations/approveTreaty';
import { treaty } from '../../interfaces/queries/treaty';
import GraphQL from '../../services/GraphQL';

export interface Parameters {
  id: string;
}

/**
 * Approve a treaty for your alliance
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean} paginator If true it will return paginator info
 * @return {Promise<treaty| approveTreatyPaginator>}
 */
export default async function approveTreatyMutation(this: Kit, params: Parameters, query: string, apiKey: string, paginator?: false): Promise<treaty>;
export default async function approveTreatyMutation(this: Kit, params: Parameters, query: string, apiKey: string, paginator: true): Promise<approveTreatyPaginator>;
export default async function approveTreatyMutation(
  this: Kit,
  params: Parameters,
  query: string,
  apiKey: string,
  paginator?: boolean,
): Promise<treaty | approveTreatyPaginator> {
  const argsToParameters = GraphQL.generateParameters(params as mutationApproveTreatyArgs);

  const res = await GraphQL.makeMutationCall(`
    mutation {
        approveTreaty${argsToParameters} {
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
    apiKey,
    this.botKey,
  );

  this.setRateLimit(res.rateLimit);

  if (paginator)
    return res.data.approveTreaty as approveTreatyPaginator;


  return res.data.approveTreaty as treaty;
}
