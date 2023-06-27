import React from 'react'

interface IStatsSpanComponent {
  value: string | number
}

const StatsSpanComponent = ({ value }: IStatsSpanComponent) => {
  return (
    <span className="py-1 px-3 bg-gray-100 shadow rounded-xl">
      {value}
    </span>
  )
}

export default StatsSpanComponent