import React from 'react'
import { useParams } from 'react-router-dom'
function PortalUsers() {

    const params = useParams()
    const userId = params.userId;
  return (
    <div>
         <h1>Portal Users {userId}</h1>
       <ul>
        <li>Sirajeevi</li>
        <li>Abinesh</li>
       </ul>
    </div>
  )
}

export default PortalUsers