import React from "react";
import {
  IonApp,
  setupIonicReact,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet
} from "@ionic/react";

import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Explore from "./pages/Explore.jsx";

// ICONS
import {
  homeOutline,
  barChartOutline,
  giftOutline,
  trendingUpOutline,
} from "ionicons/icons";

setupIonicReact();

export default function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>

            {/* Pages */}
            <Route exact path="/home" component={Home} />
            <Route exact path="/insights" component={Explore} /> 
            <Route exact path="/offers" component={Explore} />
            <Route exact path="/build" component={Explore} />

            {/* Default Redirect */}
            <Redirect exact from="/" to="/home" />
          </IonRouterOutlet>

          {/* Bottom Tab Bar */}
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={homeOutline} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>

            <IonTabButton tab="insights" href="/insights">
              <IonIcon icon={barChartOutline} />
              <IonLabel>Insights</IonLabel>
            </IonTabButton>

            <IonTabButton tab="offers" href="/offers">
              <IonIcon icon={giftOutline} />
              <IonLabel>Offers</IonLabel>
            </IonTabButton>

            <IonTabButton tab="build" href="/build">
              <IonIcon icon={trendingUpOutline} />
              <IonLabel>Build</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
}
