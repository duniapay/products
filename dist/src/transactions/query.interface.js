"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Query {
    constructor(pageSizeOrQuery, params) {
        if (typeof pageSizeOrQuery === 'number') {
            this.page_size = pageSizeOrQuery;
            this.query = params || { user: 'payments@1xbet-team.com',
                status: '' };
        }
        else {
            this.page_size = pageSizeOrQuery.page_size;
            this.query = pageSizeOrQuery.query || { user: 'payments@1xbet-team.com',
                status: '' };
        }
    }
}
exports.default = Query;
//# sourceMappingURL=query.interface.js.map