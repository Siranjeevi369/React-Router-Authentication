
//------------------------------ Links --------------------

// import { Link } from 'react-router-dom'

// function Navbar() {
//   return (
//     <nav>
//         <Link to='/' >Home</Link>
//         <Link to='/About'>About</Link>
//     </nav>
//   )
// }


//--------------------- Active Links ----------------------

import { NavLink } from 'react-router-dom'
import { useAuth } from './Authentication/Auth'



function Navbar() {
    
  const auth = useAuth();

    const NavLinkStyles = (isActive) => {
        console.log(isActive);

        return {
                fontWeight: isActive ? 'bold' : 'normal',
                textDecoration: isActive ? 'none' : 'underline',
        }
    }

  return (
    <nav>
        <NavLink  style={NavLinkStyles} to='/' >Home</NavLink>
        <NavLink style={NavLinkStyles} to='/About'>About</NavLink>
        <NavLink style={NavLinkStyles} to='/products'>Products</NavLink>
        <NavLink style={NavLinkStyles} to='/profile'>Profile</NavLink>

        {!auth.user && (
          <NavLink style={NavLinkStyles} to='login'>
            Login
          </NavLink>
        )

        }
    </nav>
  )
}

export default Navbar