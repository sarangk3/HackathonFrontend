import React from "react";
import { Nav, NavLink, NavMenu } 	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/" activeStyle>
			Home
		</NavLink>

		<NavLink to="/Table" activeStyle>
			Table
		</NavLink>
        
		<NavLink to="/Report" activeStyle>
			Report
		</NavLink>

		</NavMenu>
	</Nav>
    {/* Hello
    <Nav>
        <NavMenu>
		<NavLink to="/about" activeStyle>
			About
		</NavLink>
        </NavMenu>
    </Nav> */}
    
	</>
);
};

export default Navbar;
