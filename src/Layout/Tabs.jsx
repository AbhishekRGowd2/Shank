import React from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet
} from "@ionic/react";
import { Route, Redirect } from "react-router";
import {
  homeOutline,
  barChartOutline,
  giftOutline,
  trendingUpOutline,
} from "ionicons/icons";

import Home from "../pages/Home";
import Insights from "../pages/Insights";
import Offers from "../pages/Offers";
import Build from "../pages/Build";

export default function Tabs() {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact />
        <Route path="/insights" component={Insights} exact />
        <Route path="/offers" component={Offers} exact />
        <Route path="/build" component={Build} exact />

        {/* Default redirect */}
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
  );
}
