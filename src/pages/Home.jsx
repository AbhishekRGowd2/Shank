import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import HeaderDashboard from "../components/Header/Header.jsx";
import ScoreCard from "../components/ScoreCard/ScoreCard.jsx";
import "./Home.css";

export default function Home() {
  return (
    <IonPage>
      <HeaderDashboard />
      <IonContent fullscreen className="home-content">
        <ScoreCard />
      </IonContent>
    </IonPage>
  );
}