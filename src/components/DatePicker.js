import React from 'react'

export default function DatePicker({ handleSetDate, date }) {

  return (
        <input type="date" value={date} onChange={(e) => handleSetDate(e)} />
  )
}

