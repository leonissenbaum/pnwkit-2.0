import { Scalars } from ".."
import { paginatorInfo } from "../other"
import { treaty } from "../queries/treaty"

export type proposeTreatyPaginator = {
    __typename?: 'proposeTreatyPaginator'
    paginatorInfo: paginatorInfo
    data: treaty
}

export type mutationProposeTreatyArgs = {
    alliance_id: Scalars['ID']
    length: Scalars['Int']
    type: Scalars['String']
    url: Scalars['String']
}