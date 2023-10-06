import { Kit } from '../..';
import { deleteTaxBracketPaginator, mutationDeleteTaxBracketArgs } from '../../interfaces/mutations/deleteTaxBracket';
import { taxBracket } from '../../interfaces/queries/bank';
import GraphQL from '../../services/GraphQL';

export interface Parameters {
  id: number;
}

/**
 * Delete a tax bracket for your alliance
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean} paginator If true it will return paginator info
 * @return {Promise<taxBracket | deleteTaxBracketPaginator>}
 */
export default async function deleteTaxBracketMutation(this: Kit, params: Parameters, query: string, apiKey: string, paginator?: false): Promise<taxBracket>;
export default async function deleteTaxBracketMutation(this: Kit, params: Parameters, query: string, apiKey: string, paginator: true): Promise<deleteTaxBracketPaginator>;
export default async function deleteTaxBracketMutation(
  this: Kit,
  params: Parameters,
  query: string,
  apiKey: string,
  paginator?: boolean,
): Promise<taxBracket | deleteTaxBracketPaginator> {
  const argsToParameters = GraphQL.generateParameters(params as mutationDeleteTaxBracketArgs);

  const res = await GraphQL.makeMutationCall(`
    mutation {
        deleteTaxBracket${argsToParameters} {
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
    return res.data.deleteTaxBracket as deleteTaxBracketPaginator;


  return res.data.deleteTaxBracket as taxBracket;
}
