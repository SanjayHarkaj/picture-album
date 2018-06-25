import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import ClusterTool from './components/cluster_tool/cluster_tool';
import UserCluster from './components/manual_clustering/user_cluster';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={ClusterTool} />
        <Route path='user_cluster' component={UserCluster} />
        <Route path='*' component={ClusterTool} />
    </Route>
);