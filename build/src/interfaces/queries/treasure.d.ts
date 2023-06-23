import { Maybe, Scalars } from "..";
import { nation } from "./nation";
export type treasure = {
    __typename?: 'treasure';
    name?: Maybe<Scalars['String']>;
    color?: Maybe<Scalars['String']>;
    continent?: Maybe<Scalars['String']>;
    bonus?: Maybe<Scalars['Int']>;
    spawn_date?: Maybe<Scalars['Date']>;
    nation_id: Maybe<Scalars['ID']>;
    nation?: Maybe<nation>;
};
