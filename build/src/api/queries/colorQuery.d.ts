import { Kit } from '../..';
import { color } from '../../interfaces/queries/color';
/**
 * Gets all color trade blocs
 * @param {string} query The graphql query to get info with
 * @return {Promise<color[]>}
 */
export default function colorQuery(this: Kit, query: string): Promise<color[]>;
