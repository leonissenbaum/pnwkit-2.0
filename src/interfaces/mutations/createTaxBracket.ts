import { Scalars } from "..";
import { paginatorInfo } from "../other";
import { taxBracket } from "../queries/bank";

export type createTaxBracketPaginator = {
    __typename?: 'DeleteTaxBracketPaginator'
    paginatorInfo: paginatorInfo
    data: taxBracket
  }

export type mutationCreateTaxBracketArgs = {
    name: Scalars['String']
    money_tax_rate: Scalars['Int']
    resource_tax_rate: Scalars['Int']
  }