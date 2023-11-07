import React from 'react'
import {PracticeCard} from "@components/feature"
import { CustomLink, List } from '@components/common'
import './PracticeSection.scss'
import { SPEAKING_ROUTE, WRITING_ROUTE } from '@utils/consts'

export default function PracticeSection() {
  const IELTS_SECTIONS = [
    {
      id: 1,
      title: "IELTS Speaking",
      icon: "speaking_section",
      isActive: true,
      route: SPEAKING_ROUTE
    },
    {
      id: 2,
      title: "IELTS Writing",
      icon: "writing_section",
      isActive: true,
      route: WRITING_ROUTE
    },
    {
      id: 3,
      title: "IELTS Reading",
      icon: "reading_section",
      isActive: false,
      route: SPEAKING_ROUTE
    },
    {
      id: 4,
      title: "IELTS Listening",
      icon: "listening_section",
      isActive: false,
      route: SPEAKING_ROUTE
    }
  ]
  return (
    <div className='practice'>
      <h2>Choose practice section</h2>
      <List
      className='practice__list'
        items={IELTS_SECTIONS}
        renderItem={(section)=>(
          <PracticeCard key={section.id} section={section} />

        )}
      />
    
    </div>
  )
}
