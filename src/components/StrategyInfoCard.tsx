import React from 'react'

interface StrategyInfoCardProps {
  label: string, content: string, color: string
}
function StrategyInfoCard({label, content, color}: StrategyInfoCardProps) {

  return (
      <div className="strategy-info" style={{borderColor: color}}>
        <h2 className="text-lg" style={{backgroundColor: color, margin: "0", padding: "30px"}}>{label}</h2>
        <p style={{padding: "24px", fontSize: "28px"}}>{content}</p>
      </div>
  )
}

export default StrategyInfoCard;