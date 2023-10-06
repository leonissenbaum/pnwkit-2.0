import { Kit } from '../..';
import { editTaxBracketPaginator, mutationEditTaxBracketArgs } from '../../interfaces/mutations/editTaxBracket';
import { taxBracket } from '../../interfaces/queries/bank';
import GraphQL from '../../services/GraphQL';

export interface Parameters {
  id: string
  name?: string;
  money_tax_rate?: number;
  resource_tax_rate?: number;
}

/**
 * Edit a tax bracket for your alliance
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean} paginator If true it will return paginator info
 * @return {Promise<taxBracket| editTaxBracketPaginator>}
 */
export default async function editTaxBracketMutation(this: Kit, params: Parameters, query: string, apiKey: string, paginator?: false): Promise<taxBracket>;
export default async function editTaxBracketMutation(this: Kit, params: Parameters, query: string, apiKey: string, paginator: true): Promise<editTaxBracketPaginator>;
export default async function editTaxBracketMutation(
  this: Kit,
  params: Parameters,
  query: string,
  apiKey: string,
  paginator?: boolean,
): Promise<taxBracket | editTaxBracketPaginator> {
  const argsToParameters = GraphQL.generateParameters(params as mutationEditTaxBracketArgs);

  const res = await GraphQL.makeMutationCall(`
    mutation {
        editTaxBracket${argsToParameters} {
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
    return res.data.editTaxBracket as editTaxBracketPaginator;


  return res.data.editTaxBracket as taxBracket;
}
