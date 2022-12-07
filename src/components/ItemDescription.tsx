import React from 'react'

interface ItemDescriptionProps {
  title: string,
  text: string,
  icon: string
}

function ItemDescription({title, text, icon}: ItemDescriptionProps) {
  return (
    <div style={{display: "flex", margin: "3rem 0", padding: "1rem 2rem", justifyContent: "center", flexDirection: "column", alignItems: "center", flex: "1 1 30%"}}>
      {icon && <img src={icon} alt="idea" width="90" height="90"/>}
      {title && <p className="text-md bold" style={{margin: "0.5rem 0", textAlign: "center"}}>{title}</p>}
      {text && <p className="text-md" style={{margin: "0.5rem 0", textAlign: "center"}}>{text}</p>}
    </div>
  )
}

export default ItemDescription