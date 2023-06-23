import { Scalars } from "..";
import { paginatorInfo } from "../other";
import { treaty } from "../queries/treaty";

export type cancelTreatyPaginator = {
    __typename?: 'cancelTreatyPaginator'
    paginatorInfo: paginatorInfo
    data: treaty
}

export type mutationCancelTreatyArgs = {
    id: Scalars['ID']
}