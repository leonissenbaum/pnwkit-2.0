import { Kit } from '../..';
import GraphQL from '../../services/GraphQL';
import { taxBracket } from '../../interfaces/queries/bank';
import { assignTaxBracketPaginator, mutationAssignTaxBracketArgs } from '../../interfaces/mutations/assignTaxBracket';

export interface Parameters {
  id: number;
  target_id: number;
}

/**
 * Assign a tax bracket for your alliance
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean} paginator If true it will return paginator info
 * @return {Promise<taxBracket| assignTaxBracketPaginator>}
 */
export default async function assignTaxBracketMutation(this: Kit, params: Parameters, query: string, apiKey: string, paginator?: false): Promise<taxBracket>;
export default async function assignTaxBracketMutation(this: Kit, params: Parameters, query: string, apiKey: string, paginator: true): Promise<assignTaxBracketPaginator>;
export default async function assignTaxBracketMutation(
  this: Kit,
  params: Parameters,
  query: string,
  apiKey: string,
  paginator?: boolean,
): Promise<taxBracket | assignTaxBracketPaginator> {
  const argsToParameters = GraphQL.generateParameters(params as mutationAssignTaxBracketArgs);

  const res = await GraphQL.makeMutationCall(`
    mutation {
        assignTaxBracket${argsToParameters} {
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
    return res.data.assignTaxBracket as assignTaxBracketPaginator;


  return res.data.assignTaxBracket as taxBracket;
}
