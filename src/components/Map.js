import React  from 'react';

import map from '../media/sampleMap.png'
import '../App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function Map() {
  return (
    <div className="App">
      <header>
        <h1> Neighborhood Demo </h1>

        <img src={map} alt="map" />
        <h1>Hooray! You can Access!</h1>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(Map);