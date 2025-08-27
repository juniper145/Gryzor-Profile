import React from "react";
import "../styles/AchievementsCard.css";

export default function AchievementsCard({ items = [] }) {
  return (
    <div className="card achievements-card">
      <h3>Achievements</h3>
      {items.length === 0 ? (
        <p className="empty">No achievements yet. Start a quest!</p>
      ) : (
        <ul className="ach-list">
          {items.map((a, i) => (
            <li key={i} className="ach-item">
              <span className="icon">{a.icon}</span>
              <div className="txt">
                <div className="t">{a.title}</div>
                <div className="d">{a.detail}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
