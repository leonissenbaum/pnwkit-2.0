import { Scalars } from "..";
import { paginatorInfo } from "../other";
import { treaty } from "../queries/treaty";

export type approveTreatyPaginator = {
    __typename?: 'approveTreatyPaginator'
    paginatorInfo: paginatorInfo
    data: treaty
}

export type mutationApproveTreatyArgs = {
    id: Scalars['ID']
}