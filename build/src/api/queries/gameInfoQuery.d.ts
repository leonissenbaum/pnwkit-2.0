import { Kit } from '../..';
import { gameInfo } from '../../interfaces/queries/gameInfo';
/**
 * Gets the details on certain game information
 * @param {string} query The graphql query to get info with
 * @return {Promise<gameInfo>}
 */
export default function gameInfoQuery(this: Kit, query: string): Promise<gameInfo>;
