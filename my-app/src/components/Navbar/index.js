import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>

				<NavMenu>
					<img src="/ahs_nobg.png" alt="Logo" height={70} className="px-5" />
					<NavLink to="/" activeStyle>
						Home
					</NavLink>

					<NavLink to="/Table" activeStyle>
						Table
					</NavLink>

					{/* <NavLink to="/Report" activeStyle>
						Report
					</NavLink> */}

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
