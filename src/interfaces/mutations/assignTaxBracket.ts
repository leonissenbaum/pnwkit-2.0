import { Scalars } from "..";
import { paginatorInfo } from "../other";
import { taxBracket } from "../queries/bank";

export type mutationAssignTaxBracketArgs = {
    id: Scalars['Int']
    target_id: Scalars['Int']
  }

export type assignTaxBracketPaginator = {
    __typename?: 'assignTaxBracketPaginator'
    paginatorInfo: paginatorInfo
    data: taxBracket
}