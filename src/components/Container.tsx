import React from 'react'

export interface ContainerProps  {
  children: React.ReactNode
  color: string,
  label?: string
}

function Container({children, color, label}: ContainerProps) {
  return (
    <div style={{border: `3px solid ${color}`, marginTop: '50px', width: '100%'}}>
      {label && <div className="text-lg" style={{position: "relative", top: "-50px", left: "-3px", backgroundColor: color, width: 'max-content', padding: "30px"}}>{label}</div>}
      <div style={{display: 'flex', flexDirection: "column", padding: "0 30px 30px 30px", gap: "1rem"}}>
        {children}
      </div>
    </div>
  )
}

export default Container