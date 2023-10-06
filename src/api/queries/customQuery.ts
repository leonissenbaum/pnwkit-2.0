import { Kit } from '../..';
import GraphQL from '../../services/GraphQL';

/**
 * Make a Custom Query
 * @param {string} query The graphql query to get info with
 */
export default async function customQuery(
    this: Kit,
    query: string,
): Promise<any | any[]> {

    const res = await GraphQL.makeCall(`
    {
        ${query}
    }
  `, this.apiKey);

    this.setRateLimit(res.rateLimit);

    return res.data as any[];
}
