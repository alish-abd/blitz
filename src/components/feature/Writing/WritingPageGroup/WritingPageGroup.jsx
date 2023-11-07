import React from 'react'
import { WRITING_TEST_ROUTE } from '@utils/consts';
import { PracticeStartCard } from '@components/feature';
import './WritingPageGroup.scss'

export default function WritingPageGroup() {
    const SECTION_INFO = {
        title: "IELTS Writing Practice",
        description:
          "This is the instruction for your IELTS writing practice. All your answers will be saved and then analyzed by AI to evaluate it and give you a detailed feedback on your writing",
        button: "Start writing practice",
        route: WRITING_TEST_ROUTE
      };
      return (
        <div>
          <PracticeStartCard section={SECTION_INFO} />
        </div>
      );
}
