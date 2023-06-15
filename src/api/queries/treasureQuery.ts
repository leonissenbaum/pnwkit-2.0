import {Kit} from '../..';
import { treasure } from '../../interfaces/queries/treasure';
import GraphQL from '../../services/GraphQL';

/**
 * Gets a list of all treasures
 * @param {string} query The graphql query to get info with
 * @return {Promise<treasure[]>}
 */
export default async function treasureQuery(
    this: Kit,
    query: string,
): Promise<treasure[]> {
  const res = await GraphQL.makeCall(`
    {
      treasures {
        ${query}
      }
    }
  `, this.apiKey);

  this.setRateLimit(res.rateLimit);

  return res.data.treasures as treasure[];
}
