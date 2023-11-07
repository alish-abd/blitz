import React from "react";
import { Button, CustomLink, Image } from "@components/common";
import "./PracticeStartCard.scss";

export default function PracticeStartCard({ section }) {

  return (
    <div className="practice__start-card">
      <div className="practice__start-card-text">
        <h2 className="practice__start-card-title">{section.title}</h2>
        <p className="practice__start-card-subtitle">{section.description}</p>
        <CustomLink to={section.route}> <Button className={"btn--main btn--pill"} text={section.button} /></CustomLink>
      </div>
      <Image name={'default.svg'} />
    </div>
  );
}
