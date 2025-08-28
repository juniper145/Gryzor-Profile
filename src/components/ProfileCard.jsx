import React from "react";
import PropTypes from "prop-types";
import "../styles/ProfileCard.css";

export default function ProfileCard({
  gamerTag,
  discord,
  title,
  status,
  hoursAllTime,
  streakDays,
  avatar
}) {
  return (
    <div className="profile-card">
      <div className="profile-content">
        <div className="avatar-wrapper">
          <img src={avatar} alt={gamerTag} className="avatar" />
        </div>
        <div className="profile-info">
          <div className="profile-header">
            <h2 className="gamer-tag">{gamerTag}</h2>
            <p className="discord">{discord}</p>
            <span className="status">{status}</span>
          </div>
          <p className="profile-title">{title}</p>
          <div className="profile-stats">
            <div className="stat-item">
              <span className="stat-value">{hoursAllTime}</span>
              <span className="stat-label">Hours Played</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{streakDays}</span>
              <span className="stat-label">Streak Days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProfileCard.propTypes = {
  gamerTag: PropTypes.string.isRequired,
  discord: PropTypes.string,
  title: PropTypes.string,
  status: PropTypes.string,
  hoursAllTime: PropTypes.number,
  streakDays: PropTypes.number,
  avatar: PropTypes.string.isRequired
};

ProfileCard.defaultProps = {
  discord: "",
  title: "",
  status: "Offline",
  hoursAllTime: 0,
  streakDays: 0
};
