// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'D:/job/ii-admin-ui/node_modules/@umijs/preset-built-in/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('../../../node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"中后台基础组件库","meta":{"order":10}}],"/components":[{"title":"组件总览","children":[{"path":"/components","title":"组件总览"}]},{"title":"展示组件","children":[{"path":"/components/imodal","title":"IModal组件"},{"path":"/components/itabs","title":"ITabs组件"},{"path":"/components/itable","title":"ITable组件"}]}]}},"locales":[],"navs":{"*":[{"path":"/components","title":"组件","order":1}]},"title":"ii-admin-ui","logo":"https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png","mode":"site","repoUrl":"https://github.com/LagrangeLabs/ii-admin-ui"},
      ...props,
    }),
    "routes": [
      {
        "path": "/",
        "component": require('../../../docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1605078989000,
          "title": "中后台基础组件库",
          "order": 10,
          "hero": {
            "title": "ii-admin-ui",
            "desc": "<div class=\"markdown\"><p>中后台基础组件库</p></div>",
            "actions": [
              {
                "text": "快速上手",
                "link": "/components"
              }
            ]
          },
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2019-present<br />Powered by self</p></div>",
          "slugs": [
            {
              "depth": 2,
              "value": "ii-admin-ui(中后台基础组件库)",
              "heading": "ii-admin-ui中后台基础组件库"
            },
            {
              "depth": 2,
              "value": "一、项目启动",
              "heading": "一、项目启动"
            },
            {
              "depth": 2,
              "value": "二、常用命令",
              "heading": "二、常用命令"
            },
            {
              "depth": 2,
              "value": "三、更多资料",
              "heading": "三、更多资料"
            }
          ]
        },
        "title": "中后台基础组件库"
      },
      {
        "path": "/components/imodal",
        "component": require('../../../docs/components/IModal.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/IModal.md",
          "updatedTime": 1605078989000,
          "title": "IModal组件",
          "slugs": [
            {
              "depth": 1,
              "value": "IModal 组件",
              "heading": "imodal-组件"
            },
            {
              "depth": 3,
              "value": "IModal prop 说明",
              "heading": "imodal-prop-说明"
            }
          ],
          "nav": {
            "path": "/components",
            "title": "组件"
          },
          "group": {
            "title": "展示组件"
          }
        },
        "title": "IModal组件"
      },
      {
        "path": "/components",
        "component": require('../../../docs/components/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/index.md",
          "updatedTime": 1605078989000,
          "title": "组件总览",
          "order": 1,
          "nav": {
            "title": "组件",
            "order": 1,
            "path": "/components"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "组件总览",
              "heading": "组件总览"
            }
          ],
          "group": {
            "title": "组件总览"
          }
        },
        "title": "组件总览"
      },
      {
        "path": "/components/itable",
        "component": require('../../../docs/components/ITable.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/ITable.md",
          "updatedTime": 1605078989000,
          "title": "ITable组件",
          "slugs": [
            {
              "depth": 1,
              "value": "ITable 组件",
              "heading": "itable-组件"
            },
            {
              "depth": 3,
              "value": "ITable prop 说明",
              "heading": "itable-prop-说明"
            }
          ],
          "nav": {
            "path": "/components",
            "title": "组件"
          },
          "group": {
            "title": "展示组件"
          }
        },
        "title": "ITable组件"
      },
      {
        "path": "/components/itabs",
        "component": require('../../../docs/components/ITabs.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/ITabs.md",
          "updatedTime": 1605078989000,
          "title": "ITabs组件",
          "slugs": [
            {
              "depth": 1,
              "value": "IModal 组件",
              "heading": "imodal-组件"
            }
          ],
          "nav": {
            "path": "/components",
            "title": "组件"
          },
          "group": {
            "title": "展示组件"
          }
        },
        "title": "ITabs组件"
      }
    ],
    "title": "ii-admin-ui"
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
