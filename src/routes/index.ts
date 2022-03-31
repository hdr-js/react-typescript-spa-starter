import React from 'react';

const components = ['Home', 'PageNotFound'];

const Components = {};
components.forEach((item) => {
  Components[item] = React.lazy(() => import(`./${item}`));
});

export default Components;
