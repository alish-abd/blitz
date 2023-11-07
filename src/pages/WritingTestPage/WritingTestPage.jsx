import { WritingTestProcess } from '@components/feature'
import React from 'react'

export default function WritingTestPage() {

  const WRITING_INFO = {
    title: "Writing task 1",
    text: "The graph below shows the average monthly temperatures in a specific city over the course of a year. Write a report for a university lecturer describing the main trends and making comparisons where relevant.",
    image: 'https://www.ieltsbuddy.com/images/ielts-task-1-fast-food.jpg'
  }

  return (
    <div>
      <WritingTestProcess writing={WRITING_INFO} />
    </div>
  )
}
