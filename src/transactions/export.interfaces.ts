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
    pages: {},
    archived: boolean,
    created: boolean,
    updated: boolean
    }
  }
  

  class ExportResponse implements IExportResponse {
    public status: string;
    public data: {
        id: string;
        type: string;
        query: {};
        status: string;
        count: number;
        page_size: number;
        progress: number;
        pages: {},
        archived: boolean,
        created: boolean,
        updated: boolean
        }
   
    constructor(query: {} | IExportResponse, type?: string,
        status?: string,
        count?: number,
        page_size?: number,
        progress?: number,) {
      if (typeof query === 'object') {
        this.data.query = query['data']['query'];
        this.data.type = query['data']['type'] || '';
        this.data.status = query['data']['status'] || 15;
        this.data.count = query['data']['count'] || 0;
        this.status = query['data']['status'] || 'complete';

      } else {
        this.data.query = query;
        this.data.type = type || '';
        this.data.page_size = page_size || 15;
        this.data.count = count || 0;
        this.status = status || 'complete';
      }
    }
  }
  
  export default ExportResponse;