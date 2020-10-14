// TODO: 文件自动生成
import React from 'react';
import loadable from '@loadable/component';
import Loading from 'src/components/loading';

const ReactLazy = loadable(
    () => import(/* webpackChunkName: "reactlazy" */ 'src/modules/react-lazy'),
    {
        fallback: <Loading />
    }
);

const NodeSsl = loadable(
    () => import(/* webpackChunkName: "nodessl" */ 'src/modules/node-ssl'),
    {
        fallback: <Loading />
    }
);

const ReactContext = loadable(
    () => import(/* webpackChunkName: "reactcontext" */ 'src/modules/react-context'),
    {
        fallback: <Loading />
    }
);

const Commonjs = loadable(
    () => import(/* webpackChunkName: "commonjs" */ 'src/modules/common-js'),
    {
        fallback: <Loading />
    }
);

const routes = [
    { path: '/reactlazy', component: ReactLazy, exact: true },
    { path: '/nodessl', component: NodeSsl, exact: true },
    { path: '/reactcontext', component: ReactContext, exact: true },
    { path: '/commonjs', component: Commonjs, exact: true },
];

export default routes;
