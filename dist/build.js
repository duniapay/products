"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = require("fs-extra");
const jet_logger_1 = require("jet-logger");
const child_process_1 = require("child_process");
const logger = new jet_logger_1.default();
logger.timestamp = false;
(async () => {
    try {
        await remove('./dist/');
        await copy('./src/pre-start/env/production.env', './dist/pre-start/env/production.env');
        await exec('tsc --build tsconfig.prod.json', './');
    }
    catch (err) {
        logger.err(err);
    }
})();
function remove(loc) {
    return new Promise((res, rej) => {
        return fs_extra_1.default.remove(loc, (err) => {
            return (!!err ? rej(err) : res());
        });
    });
}
function copy(src, dest) {
    return new Promise((res, rej) => {
        return fs_extra_1.default.copy(src, dest, (err) => {
            return (!!err ? rej(err) : res());
        });
    });
}
function exec(cmd, loc) {
    return new Promise((res, rej) => {
        return child_process_1.default.exec(cmd, { cwd: loc }, (err, stdout, stderr) => {
            if (!!stdout) {
                logger.info(stdout);
            }
            if (!!stderr) {
                logger.warn(stderr);
            }
            return (!!err ? rej(err) : res());
        });
    });
}
//# sourceMappingURL=build.js.map