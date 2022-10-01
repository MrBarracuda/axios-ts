import {Link} from "react-router-dom";

export const NotFound = () => (
    <>
        <h4>Sorry... The Page Cannot be Found</h4>
        <Link to='/'>go to homepage</Link>
    </>
);