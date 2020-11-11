// @ts-nocheck
import { createHashHistory } from 'D:/job/ii-admin-ui/node_modules/@umijs/preset-built-in/node_modules/@umijs/runtime';

let options = {
  "basename": "/ii-admin-ui"
};
if ((<any>window).routerBase) {
  options.basename = (<any>window).routerBase;
}

// remove initial history because of ssr
let history: any = process.env.__IS_SERVER ? null : createHashHistory(options);
export const createHistory = (hotReload = false) => {
  if (!hotReload) {
    history = createHashHistory(options);
  }

  return history;
};

export { history };
