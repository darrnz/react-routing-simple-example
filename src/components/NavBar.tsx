// eslint-disable react/prop-types
import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.css";
import { IUserType } from "../App";
const userInfo = {
  name: "John Doe",
  userId: 1234,
};

type IProps = {
  setTestUser: (data: IUserType) => void;
  testUser: IUserType;
};

const NavBar: React.FC<IProps> = ({ setTestUser, testUser }) => {
  const { name, userId } = userInfo;
  return (
    <nav>
      <Link to="/">Home</Link>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/store">Store</NavLink>
      <NavLink to="/login">Login to Store</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <Link
        to={`/profile/${userId}?name=${name}`}
        onClick={() => setTestUser(userInfo)}
      >
        {!testUser?.name ? "Log in Profile" : `${testUser?.name} Profile`}
      </Link>
    </nav>
  );
};

export default NavBar;
