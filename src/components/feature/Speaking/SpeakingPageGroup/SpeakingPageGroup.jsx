import React from "react";
import { PracticeStartCard } from "@components/feature";
import "./SpeakingPageGroup.scss";
import { SPEAKING_TEST_ROUTE } from "@utils/consts";

export default function SpeakingPageGroup() {
  const SECTION_INFO = {
    title: "IELTS Speaking Practice",
    description:
      "This is the instruction for your IELTS speaking practice. All your answers will be recorded and then analyzed by AI to evaluate it and give you a detailed feedback on your speech",
    button: "Start speaking practice",
    route: SPEAKING_TEST_ROUTE,
    image: 'default.svg'
  };
  return (
    <div>
      <PracticeStartCard section={SECTION_INFO} />
    </div>
  );
}
