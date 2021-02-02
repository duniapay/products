export interface IExportResponse {
    status?: string;
    data?: {
      id: string;
      section: string
      resource: string
      query: any
      status: string
      count: number
      page_size: number
      progress: number
      file_format: string
      archived: boolean
      created: boolean
      updated: boolean
      user: any
      pages?: {}
      type?: string
    }
  }
  
export interface IExportRequest {
    page_size: number
    section: string
    resource: string
    file_format: string
    query: IExportQuery
}

interface IExportQuery {
  fields: string
}