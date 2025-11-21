import React from "react";
import { IonIcon } from "@ionic/react";
import { person } from "ionicons/icons";
import "./FloatingAvatar.css";

export default function FloatingAvatar() {
  return (
    <div className="floating-avatar">
      <IonIcon icon={person} />
    </div>
  );
}
