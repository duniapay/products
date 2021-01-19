"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExportResponse {
    constructor(query, type, status, count, page_size, progress) {
        if (typeof query === 'object') {
            this.data.query = query['data']['query'];
            this.data.type = query['data']['type'] || '';
            this.data.status = query['data']['status'] || 15;
            this.data.count = query['data']['count'] || 0;
            this.status = query['data']['status'] || 'complete';
        }
        else {
            this.data.query = query;
            this.data.type = type || '';
            this.data.page_size = page_size || 15;
            this.data.count = count || 0;
            this.status = status || 'complete';
        }
    }
}
exports.default = ExportResponse;
//# sourceMappingURL=export.interfaces.js.map