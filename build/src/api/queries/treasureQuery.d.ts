import { Kit } from '../..';
import { treasure } from '../../interfaces/queries/treasure';
/**
 * Gets a list of all treasures
 * @param {string} query The graphql query to get info with
 * @return {Promise<treasure[]>}
 */
export default function treasureQuery(this: Kit, query: string): Promise<treasure[]>;
