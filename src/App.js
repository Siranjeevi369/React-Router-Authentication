
import './App.css';

import { Routes ,Route} from 'react-router-dom';
import { Home } from './components/Home';
// import  About  from './components/About';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import Products from './components/Products/Products';
import NewProducts from './components/Products/NewProducts';
import OldProducts from './components/Products/OldProducts';
import Users from './components/Users/Users';
import PortalUsers from './components/Users/PortalUsers';
import AdminUsers from './components/Users/AdminUsers';
import React from 'react';
import Profile from './components/Authentication/Profile';
import AuthProvider from './components/Authentication/Auth';
import Login from './components/Authentication/Login';
import { RequireAuth } from './components/Authentication/RequireAuth';

const LazyAbout = React.lazy( () => import('./components/About'))

function App() {
  console.log("App")

  return (
   
    <div className="App">
<AuthProvider>
      
        <Navbar/>
       <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='About' element={

              <React.Suspense fallback='Loading'>
                  <LazyAbout/>
              </React.Suspense>

              }/>
        <Route path='order-summary' element={<OrderSummary/>} />
        <Route path='products' element={<Products/>}>
          <Route index element={<OldProducts/>}/>
          <Route path='old' element={<OldProducts/>}/>
          <Route path='new' element={<NewProducts/>}/>
        </Route>
        <Route path='users' element={<Users/>}>
              <Route path=':userId'  element={<PortalUsers/>}/>
              <Route path='admin' element={<AdminUsers/>}/>
        </Route>
        
        <Route path='*' element={<NoMatch/>}/>  
        <Route path='profile' element={
          
        <RequireAuth>
          <Profile/>
        </RequireAuth>
        
        } />
        <Route path='login' element={<Login/>} /> 
       </Routes>

       </AuthProvider>
      
   
    </div>
  );
 
  
}

export default App;
