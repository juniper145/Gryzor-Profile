import React from "react";
import "../styles/GameCard.css";

export default function GameCard({
  name,
  ign,
  hours,
  rank,
  yearstarted,
  stats,
  image,
  achievements = [],
  className 
}) {
  const hasNew = Boolean(yearstarted);

  return (
    <div className={`inner-card game-card ${className || ""}`}>
      {/* Thumbnail / Logo */}
      {image && <img src={image} alt={name} className="game-thumb" />}

      {/* Header */}
      <div className="game-header">
        <div className="title-block">
          <h4 className="game-title">{name}</h4>
          {ign && <p className="ign">IGN: {ign}</p>}
        </div>
        {hasNew && <span className="badge">New!</span>}
      </div>

      {/* Meta Info */}
      <div className="meta">
        {rank && <span className="pill">{rank}</span>}
        {hours && <span className="pill">{hours}h</span>}
      </div>

      {/* Year */}
      {hasNew && <p className="year">⭐ {yearstarted}</p>}

      {/* Stats */}
      <ul className="stat-list">
        {Object.entries(stats || {}).map(([k, v]) => (
          <li key={k} className="stat-row">
            <span className="k">{k}</span>
            <span className="v">{v}</span>
          </li>
        ))}
      </ul>

      {/* Achievements Section */}
      <div className="achievements-section">
        <h5>Achievements</h5>
        {achievements.length === 0 ? (
          <p className="empty">No achievements yet.</p>
        ) : (
          <ul className="achievements-list">
            {achievements.map((a, i) => (
              <li key={i} className="ach-item">
                <span className="icon">{a.icon}</span>
                <span className="ach-title">{a.title}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
