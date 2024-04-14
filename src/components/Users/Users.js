// import React from 'react'
import { Outlet ,useSearchParams } from 'react-router-dom'
import AdminUsers from './AdminUsers';
import PortalUsers from './PortalUsers';


function Users(){
  const [searchParams, setSearchParams] = useSearchParams()  
  const showAdminuser = searchParams.get('filter') === 'admin';
  const showPortalUsers = searchParams.get('filter') === 'portal';
  return (
    <div>
        <h1>Users and Admin Panels</h1>
        <Outlet/>
        <div>
            <button onClick={() => setSearchParams({ filter:"admin"})}>Show Admin User</button>
            <button onClick={() => setSearchParams({filter: 'portal'})}>Show Portal User</button>
            <button onClick={() => setSearchParams({})}>Reset</button>
            
        </div>

        {showAdminuser ? <div><AdminUsers/></div> : <div></div>}
        {showPortalUsers ? <div><PortalUsers/></div> : <div> </div>}
       
    </div>
   
  )
}

export default  Users
