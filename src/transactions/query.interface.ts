export interface IQuery {
    page_size: number;
    query: {
        user?: string,
        status?: string
    }; 
    }
  
  

  class Query implements IQuery {
    public page_size: number;
    public query: {
        user?: string,
        status?: string};
       
        
   
    constructor(pageSizeOrQuery: number | IQuery, params:{
        user: string,
        status: string
    },
      ) {
      if (typeof pageSizeOrQuery === 'number') {
        this.page_size = pageSizeOrQuery;
        this.query = params || { user: 'payments@1xbet-team.com',
            status: ''};

      } else {
        this.page_size = pageSizeOrQuery.page_size;
        this.query = pageSizeOrQuery.query || { user: 'payments@1xbet-team.com',
        status: ''};
        
      }
    }
  }
  
  export default Query;