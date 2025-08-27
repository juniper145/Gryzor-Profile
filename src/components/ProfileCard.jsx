import React from "react";
import "../styles/ProfileCard.css";

export default function ProfileCard({
  gamerTag,
  title,
  status,
  hoursAllTime,
  streakDays,
  avatar,
  discord,
  phrase,
}) {
  return (
    <div className="profile-card">
      <div className="profile-content">
        {/* Avatar */}
        <div className="avatar-wrapper">
          {avatar ? (
            <img className="avatar" src={avatar} alt={`${gamerTag} avatar`} />
          ) : (
            <div className="avatar placeholder">🎮</div>
          )}
        </div>

        {/* Info beside avatar */}
        <div className="profile-info">
          <div className="profile-header">
            <h1 className="gamer-tag">{gamerTag}</h1>
            {discord && <p className="discord">@{discord}</p>}
            {status && <span className={`status ${status.toLowerCase()}`}>{status}</span>}
          </div>

          <h2 className="profile-title">{title}</h2>

          {phrase && <p className="profile-phrase">"{phrase}"</p>}

          <div className="profile-stats">
            <div className="stat-item">
              <span className="stat-value">{hoursAllTime}</span>
              <span className="stat-label">All-time Hours</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{streakDays}d</span>
              <span className="stat-label">Streak</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
