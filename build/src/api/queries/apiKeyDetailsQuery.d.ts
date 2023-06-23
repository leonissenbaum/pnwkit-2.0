import { Kit } from '../..';
import { apiKeyDetails } from '../../interfaces/queries/apiKeyDetails';
/**
 * Gets the details of the api key
 * @param {string} query The graphql query to get info with
 * @return {Promise<apiKeyDetails>}
 */
export default function apiKeyDetailsQuery(this: Kit, query: string): Promise<apiKeyDetails>;
