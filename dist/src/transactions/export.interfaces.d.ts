export interface IExportResponse {
    status: string;
    data: {
        id: string;
        type: string;
        query: {};
        status: string;
        count: number;
        page_size: number;
        progress: number;
        pages: {};
        archived: boolean;
        created: boolean;
        updated: boolean;
    };
}
declare class ExportResponse implements IExportResponse {
    status: string;
    data: {
        id: string;
        type: string;
        query: {};
        status: string;
        count: number;
        page_size: number;
        progress: number;
        pages: {};
        archived: boolean;
        created: boolean;
        updated: boolean;
    };
    constructor(query: {} | IExportResponse, type?: string, status?: string, count?: number, page_size?: number, progress?: number);
}
export default ExportResponse;
