import { Scalars } from ".."
import { paginatorInfo } from "../other"
import { taxBracket } from "../queries/bank"


export type deleteTaxBracketPaginator = {
    __typename?: 'DeleteTaxBracketPaginator'
    paginatorInfo: paginatorInfo
    data: taxBracket
}


export type mutationDeleteTaxBracketArgs = {
    id: Scalars['Int']
}