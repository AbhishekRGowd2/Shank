import React from "react";
import { IonCard, IonButton, IonIcon } from "@ionic/react";
import { lockClosed, lockOpen } from "ionicons/icons";
import "./ScoreCard.css";

export default function ScoreCards() {
  return (
    <div className="score-wrapper">

      {/* LEFT SCORE CARD - ACTIVE */}
      <IonCard className="score-card active-card">
        <div className="card-header">
          <div className="provider-line"></div>
          <span className="score-provider">EQUIFAX</span>
        </div>

        <div className="circle-container">
          <div className="score-meter">
            <svg width="180" height="180" viewBox="0 0 180 180">
              <defs>
                <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ef4444" />   {/* Red for low */}
                  <stop offset="50%" stopColor="#f59e0b" />  {/* Orange for medium */}
                  <stop offset="100%" stopColor="#10b981" /> {/* Green for good */}
                </linearGradient>
              </defs>
              {/* Background circle */}
              <circle 
                className="bg-ring" 
                cx="90" 
                cy="90" 
                r="75" 
              />
              {/* Progress circle - 700/900 = 77.7% */}
              <circle 
                className="score-ring" 
                cx="90" 
                cy="90" 
                r="75" 
                strokeDasharray="471.24"
                strokeDashoffset={471.24 - (471.24 * 700 / 900)}
              />
            </svg>
            
            <div className="center-score">
              <h2 className="score-number">700</h2>
              <div className="score-label">
                <span className="rating">VERY GOOD</span>
                <span className="score-range">700/900</span>
              </div>
            </div>
          </div>
        </div>

        <div className="score-footer">
          <div className="range-labels">
            <span>300</span>
            <span>900</span>
          </div>
          <div className="next-update">
            Next: 11/14/2025
          </div>
        </div>

        <div className="card-footer-note">
          Tremble@CBB.
        </div>
      </IonCard>

      {/* RIGHT LOCKED CARD - SAME STRUCTURE BUT BLURRED */}
      <IonCard className="score-card locked-card">
        <div className="locked-overlay"></div>
        
        <div className="card-header">
          <div className="provider-line"></div>
          <span className="score-provider">TRANSUNION CIBIL</span>
        </div>

        <div className="circle-container">
          <div className="score-meter">
            <svg width="180" height="180" viewBox="0 0 180 180">
              <defs>
                <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ef4444" />   {/* Red for low */}
                  <stop offset="50%" stopColor="#f59e0b" />  {/* Orange for medium */}
                  <stop offset="100%" stopColor="#10b981" /> {/* Green for good */}
                </linearGradient>
              </defs>
              {/* Background circle */}
              <circle 
                className="bg-ring" 
                cx="90" 
                cy="90" 
                r="75" 
              />
              {/* Progress circle - same structure but blurred */}
              <circle 
                className="score-ring" 
                cx="90" 
                cy="90" 
                r="75" 
                strokeDasharray="471.24"
                strokeDashoffset={471.24 - (471.24 * 700 / 900)}
              />
            </svg>
            
            <div className="center-score">
              <h2 className="score-number">700</h2>
              <div className="score-label">
                <span className="rating">VERY GOOD</span>
                <span className="score-range">700/900</span>
              </div>
            </div>
          </div>
        </div>

        <div className="score-footer">
          <div className="range-labels">
            <span>300</span>
            <span>900</span>
          </div>
          <div className="next-update">
            Next: 11/14/2025
          </div>
        </div>

        <div className="card-footer-note">
          Tremble@CBB.
        </div>

        {/* Unlock Button */}
        <IonButton className="unlock-btn">
          <IonIcon icon={lockOpen} slot="start" />
          Unlock
        </IonButton>
      </IonCard>

    </div>
  );
}