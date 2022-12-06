import React from 'react'
import {useParams} from 'react-router-dom'
import {strategies} from '../store/Strategies'

function StrategyPage() {

  const { id } = useParams()
  const strategy = strategies.find(s => s.id === id)

  return !strategy ? (<>TODO generic not found page</>) : (
    <div>

    </div>
  )
}

export default StrategyPage;