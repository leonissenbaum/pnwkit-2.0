import { Maybe, Scalars } from "..";
import { paginatorInfo, sortOrder } from "../other";
import { nation } from "./nation";
export type queryBaseballPlayersOrderByOrderByClause = {
    column: queryBaseballPlayersOrderByColumn;
    order: sortOrder;
};
export declare enum queryBaseballPlayersOrderByColumn {
    Id = "ID",
    Date = "DATE",
    Age = "AGE",
    Pitching = "PITCHING",
    Batting = "BATTING",
    Speed = "SPEED",
    Awareness = "AWARENESS",
    Overall = "OVERALL"
}
export type queryBaseballGamesOrderByOrderByClause = {
    column: queryBaseballGamesOrderByColumn;
    order: sortOrder;
};
export declare enum queryBaseballGamesOrderByColumn {
    Id = "ID",
    Date = "DATE",
    Htscore = "HTSCORE",
    Atscore = "ATSCORE"
}
export type queryBaseballTeamsOrderByOrderByClause = {
    column: queryBaseballTeamsOrderByColumn;
    order: sortOrder;
};
export declare enum queryBaseballTeamsOrderByColumn {
    Id = "ID",
    Date = "DATE",
    Quality = "QUALITY",
    Seating = "SEATING",
    Rating = "RATING",
    Wins = "WINS",
    Glosses = "GLOSSES",
    Runs = "RUNS",
    Homers = "HOMERS",
    Strikeouts = "STRIKEOUTS",
    Games = "GAMES"
}
export type baseballGamePaginator = {
    __typename?: 'baseballGamePaginator';
    paginatorInfo: paginatorInfo;
    data: Array<baseballGame>;
};
export type baseballPlayerPaginator = {
    __typename?: 'baseballPlayerPaginator';
    paginatorInfo: paginatorInfo;
    data: Array<baseballPlayer>;
};
export type baseballTeamPaginator = {
    __typename?: 'baseballTeamPaginator';
    paginatorInfo: paginatorInfo;
    data: Array<baseballTeam>;
};
export type queryBaseballGamesArgs = {
    team_id?: Maybe<Array<Maybe<Scalars['Int']>>>;
    orderBy?: Maybe<Array<queryBaseballGamesOrderByOrderByClause>>;
    first?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
};
export type queryBaseballPlayersArgs = {
    id?: Maybe<Array<Maybe<Scalars['Int']>>>;
    team_id?: Maybe<Array<Maybe<Scalars['Int']>>>;
    orderBy?: Maybe<Array<queryBaseballPlayersOrderByOrderByClause>>;
    first?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
};
export type queryBaseballTeamsArgs = {
    id?: Maybe<Array<Maybe<Scalars['Int']>>>;
    orderBy?: Maybe<Array<queryBaseballTeamsOrderByOrderByClause>>;
    first?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
};
export type baseballGame = {
    __typename?: 'BBGame';
    id?: Maybe<Scalars['ID']>;
    date?: Maybe<Scalars['DateTimeAuto']>;
    home_id?: Maybe<Scalars['ID']>;
    away_id?: Maybe<Scalars['ID']>;
    home_team?: Maybe<baseballTeam>;
    away_team?: Maybe<baseballTeam>;
    home_nation_id?: Maybe<Scalars['ID']>;
    away_nation_id?: Maybe<Scalars['ID']>;
    home_nation?: Maybe<nation>;
    away_nation?: Maybe<nation>;
    stadium_name?: Maybe<Scalars['String']>;
    home_score?: Maybe<Scalars['Int']>;
    away_score?: Maybe<Scalars['Int']>;
    sim_text?: Maybe<Scalars['String']>;
    highlights?: Maybe<Scalars['String']>;
    home_revenue?: Maybe<Scalars['Float']>;
    spoils?: Maybe<Scalars['Float']>;
    open?: Maybe<Scalars['Int']>;
    wager?: Maybe<Scalars['Float']>;
};
export type baseballTeam = {
    __typename?: 'BBTeam';
    id?: Maybe<Scalars['ID']>;
    date?: Maybe<Scalars['DateTimeAuto']>;
    nation_id?: Maybe<Scalars['ID']>;
    nation?: Maybe<nation>;
    name?: Maybe<Scalars['String']>;
    logo?: Maybe<Scalars['String']>;
    home_jersey?: Maybe<Scalars['String']>;
    away_jersey?: Maybe<Scalars['String']>;
    stadium?: Maybe<Scalars['String']>;
    quality?: Maybe<Scalars['Int']>;
    seating?: Maybe<Scalars['Int']>;
    rating?: Maybe<Scalars['Float']>;
    wins?: Maybe<Scalars['Int']>;
    glosses?: Maybe<Scalars['Int']>;
    runs?: Maybe<Scalars['Int']>;
    homers?: Maybe<Scalars['Int']>;
    strikeouts?: Maybe<Scalars['Int']>;
    games_played?: Maybe<Scalars['Int']>;
    games?: Maybe<Array<Maybe<baseballGame>>>;
    players?: Maybe<Array<Maybe<baseballPlayer>>>;
};
export type baseballPlayer = {
    __typename?: 'BBPlayer';
    id?: Maybe<Scalars['ID']>;
    date?: Maybe<Scalars['DateTimeAuto']>;
    nation_id?: Maybe<Scalars['ID']>;
    nation?: Maybe<nation>;
    team_id?: Maybe<Scalars['ID']>;
    team?: Maybe<baseballTeam>;
    name?: Maybe<Scalars['String']>;
    age?: Maybe<Scalars['Int']>;
    position?: Maybe<Scalars['String']>;
    pitching?: Maybe<Scalars['Float']>;
    batting?: Maybe<Scalars['Float']>;
    speed?: Maybe<Scalars['Float']>;
    awareness?: Maybe<Scalars['Float']>;
    overall?: Maybe<Scalars['Float']>;
    birthday?: Maybe<Scalars['Int']>;
};
