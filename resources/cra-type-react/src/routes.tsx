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
    () => import(/* webpackChunkName: "reactlazy" */ 'src/modules/node-ssl'),
    {
        fallback: <Loading />
    }
);

const routes = [
    { path: '/reactlazy', component: ReactLazy, exact: true },
    { path: '/nodessl', component: NodeSsl, exact: true },
];

export default routes;
