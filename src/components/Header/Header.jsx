import React from "react";
import {
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
} from "@ionic/react";

import { wallet, notifications } from "ionicons/icons";
import FloatingAvatar from "../Avatar/FloatingAvatar";   // IMPORT HERE
import "./Header.css";

export default function HeaderDashboard() {
    return (
        <>
            <div style={{ position: "relative" }}>
                <IonHeader className="custom-ion-header">
                    <IonToolbar className="toolbar-bg">
                        {/* LEFT SIDE */}
                        <div className="header-left">
                            <h1 className="logo">FinScore</h1>

                            <div className="user-texts">
                                <span className="hello-text">Hello, Darshan 👋</span>
                            </div>
                        </div>


                        {/* RIGHT SIDE */}
                        <IonButtons slot="end" className="header-right">

                            <IonButton className="icon-btn orange-btn" fill="clear">
                                <IonIcon icon={wallet} />
                            </IonButton>

                            <div className="notif-wrapper">
                                <IonButton className="icon-btn" fill="clear">
                                    <IonIcon icon={notifications} />
                                </IonButton>
                                <span className="notif-dot"></span>
                            </div>

                        </IonButtons>

                    </IonToolbar>

                    <div className="header-divider"></div>
                </IonHeader>

                {/* FLOATING AVATAR OVERLAP */}
                <FloatingAvatar />
            </div>
        </>
    );
}
