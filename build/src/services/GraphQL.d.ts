import { responseAndMetadataI } from '../interfaces/other';
import { anyQuery } from '../interfaces';
/**
 * An internal method of handling calls to the P&W graphQL API
 */
declare class GraphQLService {
    private politicsAndWarAPIRoot;
    /**
     * Calls the Politics and War V3 API with a query
     * @param {string} query The GraphQL query to make
     * @param {string} apiKey Your P&W API key
     *
     * @return {Promise<any>} Returns data to be type determined in a closer function
     * @throws {Error}
     */
    makeCall(query: string, apiKey: string): Promise<responseAndMetadataI>;
    makeMutationCall(query: string, apiKey: string, bot_key: string, bot_key_api_key: string): Promise<responseAndMetadataI>;
    /**
     * Takes a query and outputs query Parameters
     * @param {AnyQuery} queryParameters Any one of the five queries that take Parameters
     * @param {string} enumeratorParameters Parameters who are represented as strings, but not sent as a string;
     * they are treated like numbers, with no quotes.
     * @return {string}
     */
    generateParameters(queryParameters: anyQuery, enumeratorParameters?: string[]): string;
}
declare const _default: GraphQLService;
export default _default;
