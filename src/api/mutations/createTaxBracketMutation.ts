import { Kit } from '../..';
import { createTaxBracketPaginator, mutationCreateTaxBracketArgs } from '../../interfaces/mutations/createTaxBracket';
import { taxBracket } from '../../interfaces/queries/bank';
import GraphQL from '../../services/GraphQL';

export interface Parameters {
    name: string;
    money_tax_rate: number;
    resource_tax_rate: number;
}

/**
 * Create a tax bracket for your alliance
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean} paginator If true it will return paginator info
 * @return {Promise<TaxBracket | createTaxBracketPaginator>}
 */
export default async function createTaxBracketMutation(this: Kit, params: Parameters, query: string, paginator?: false): Promise<taxBracket>;
export default async function createTaxBracketMutation(this: Kit, params: Parameters, query: string, paginator: true): Promise<createTaxBracketPaginator>;
export default async function createTaxBracketMutation(
    this: Kit,
    params: Parameters,
    query: string,
    paginator?: boolean,
): Promise<taxBracket | createTaxBracketPaginator> {
    const argsToParameters = GraphQL.generateParameters(params as mutationCreateTaxBracketArgs);

    const res = await GraphQL.makeMutationCall(`
    mutation {
        createTaxBracket${argsToParameters} {
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
        return res.data.createTaxBracket as createTaxBracketPaginator;
    }

    return res.data.createTaxBracket as taxBracket;
}
