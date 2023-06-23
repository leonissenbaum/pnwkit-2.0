import { Kit } from '../..';
import { bankrec, bankrecPaginator, queryBankrecsOrderByOrderByClause } from '../../interfaces/queries/bank';
export interface Parameters {
    id?: number[];
    min_id?: number;
    max_id?: number;
    before?: Date;
    after?: Date;
    stype?: number[];
    rtype?: number[];
    or_type?: number;
    sid?: number;
    rid?: number;
    or_id?: number;
    orderBy?: queryBankrecsOrderByOrderByClause;
    first?: number;
    page?: number;
}
/**
 * Gets a list of bank records
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean} paginator If true it will return paginator info
 * @return {Promise<Bankrec[] | BankrecPaginator>}
 */
export default function bankRecordsQuery(this: Kit, params: Parameters, query: string, paginator?: false): Promise<bankrec[]>;
export default function bankRecordsQuery(this: Kit, params: Parameters, query: string, paginator: true): Promise<bankrecPaginator>;
