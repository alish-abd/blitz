import React from "react";
import { CustomLink, Icon } from "@components/common";
import "./PracticeCard.scss";

export default function PracticeCard({ section }) {
  return (
    // <CustomLink>
      <CustomLink to={section.route} className={`practice__card ${section.isActive ? "practice__card-active" : "practice__card-nonactive"}`}>
        <div className="practice__card-group">
          {!section.isActive && (
            <span className="practice__card-badge">
              <p>Coming soon</p>
            </span>
          )}
          <div className="practice__card-icon">
            <Icon name={section.icon} className={section.isActive ? "practice__card-active" : "practice__card-nonactive"} />
          </div>
          <p className="practice__card-title">{section.title}</p>
        </div>
      </CustomLink>
    // </CustomLink>
  );
}
