import React from 'react';
import {
  App,
  Panel,
  View,
} from 'framework7-react';

import routes from '../routes';

export default function (props) {

  // Framework7 parameters here
  const f7params = {
    id: 'io.framework7.testapp', // App bundle ID
    name: 'Framework7', // App name
    theme: 'auto', // Automatic theme detection
    // App routes
    routes,
  };

  return (
    <App params={f7params}>

      {/* Sidebar */}
      <Panel left>
        <View url="/sidebar/" />
      </Panel>

      {/* Main View */}
      <View id="main-view" url="/" main className="safe-areas" />

    </App>
  );
};
