import Loadable from 'react-loadable';
import Loading from '../../components/loading';
import React from "react";
import path from 'path';

const LoadableComponent = Loadable({
  loader: () => import('./index'),
  loading: Loading,
  modules: ['./index'],
  webpack: () => [require.resolveWeak('./index')],
});

LoadableComponent.preload(); 

export default ()=><LoadableComponent/>;