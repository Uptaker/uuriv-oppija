import React, {useState} from 'react'

export interface CollapsableProps  {
  children: React.ReactNode
  label: string,
  show?: boolean
}

function Collapsable({children, label, show = false}: CollapsableProps) {

  const [collapsed, setCollapsed] = useState(show)

  return (
    <div className="collapsable-container">
      <div onClick={() => setCollapsed(!collapsed)} className="text-lg collapsable-item" style={{display: "flex", width: "max-content", gap: "1rem", alignItems: "center"}}>
        <i className="fa-solid fa-plus"></i>
        <span>{label}</span>
      </div>
      {collapsed && <div>{children}</div>}
    </div>
  )
}

export default Collapsable