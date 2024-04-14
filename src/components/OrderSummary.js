import React from 'react'
import { useNavigate } from 'react-router-dom'

function Order_Summary() {

  const navigate = useNavigate();
  return (
    <div>
       
<div>
 <h1>This is a Heading</h1>
 <p>This is a paragraph.</p>
 <p>This is another paragraph.</p>
</div>
<img src="img_la.jpg" alt="LA"></img>
<button onClick={()=> navigate(-1)}>Go Back</button>

    </div>
  )
}

export default Order_Summary