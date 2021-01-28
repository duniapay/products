export interface IQuery {
    page_size: number;
    query: {
        user?: string;
        status?: string;
    };
}
declare class Query implements IQuery {
    page_size: number;
    query: {
        user?: string;
        status?: string;
    };
    constructor(pageSizeOrQuery: number | IQuery, params: {
        user: string;
        status: string;
    });
}
export default Query;
