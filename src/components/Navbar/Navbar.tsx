import {Link} from "react-router-dom";
import { StyledNavbar} from "./Navbar.styles";


export const Navbar = () => (
    <StyledNavbar>
        <h1>My Blog</h1>
        <div>
            <Link to='/'>Home</Link>
            <Link to='/create'>New Blog</Link>
        </div>
    </StyledNavbar>
)