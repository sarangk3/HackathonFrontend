import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
background: #545454;
height: 55px;
display: flex;
justify-content: space-between;

z-index: 12;
`;

//padding: 0.2rem calc((100vw - 1000px) / 4);
export const NavLink = styled(Link)`
font-size: 18px;
color: 
#b0b0b0;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: #47d176;
	text-decoration: underline;
	font-weight:bold;
};
&:hover{
	text-decoration:underline;
	color: #47d176;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #07de7c;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;
