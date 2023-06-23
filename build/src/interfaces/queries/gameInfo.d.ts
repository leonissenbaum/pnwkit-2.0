import { Maybe, Scalars } from "..";
export type gameInfo = {
    __typename?: 'gameInfo';
    game_date?: Maybe<radiation>;
};
export type radiation = {
    global?: Maybe<Scalars['Float']>;
    north_america?: Maybe<Scalars['Float']>;
    south_america?: Maybe<Scalars['Float']>;
    europe?: Maybe<Scalars['Float']>;
    africa?: Maybe<Scalars['Float']>;
    asia?: Maybe<Scalars['Float']>;
    australia?: Maybe<Scalars['Float']>;
    antarctica?: Maybe<Scalars['Float']>;
};
