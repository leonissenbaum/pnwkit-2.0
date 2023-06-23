import { Scalars } from ".."
import { paginatorInfo } from "../other"
import { taxBracket } from "../queries/bank"

export type mutationEditTaxBracketArgs = {
    id: Scalars['ID']
    name: Scalars['String']
    money_tax_rate?: Scalars['Int']
    resource_tax_rate?: Scalars['Int']
}

export type editTaxBracketPaginator = {
    __typename?: 'editTaxBracketPaginator'
    paginatorInfo: paginatorInfo
    data: taxBracket
}