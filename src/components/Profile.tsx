// src/components/Profile.jsx
import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { IUserType } from "../App";

type IProps = {
  setTestUser: (data: IUserType) => void;
};

const Profile: React.FC<IProps> = ({ setTestUser }) => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // States to hold user ID and search name
  const [userId, setUserId] = useState("No user ID provided");
  const [searchName, setSearchName] = useState("No search name");

  // Update state when location changes
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    setSearchName(queryParams.get("name") || "No search name");
    setUserId(params.userId || "No user ID provided");

    // Update the user information based on URL parameters
  }, [params, location]);

  const handleLogout = () => {
    setTestUser({ name: undefined, userId: undefined });
    setUserId("No user ID provided");
    setSearchName("No search name");
    navigate("/profile");
  };
  return (
    <div>
      <h1>Profile Page</h1>
      <p>
        User ID from URL params:{" "}
        <i>
          <strong>{userId}</strong>
        </i>
      </p>
      <p>
        Search name from query params:{" "}
        <i>
          <strong>{searchName}</strong>
        </i>
      </p>
      <button type="button" onClick={() => handleLogout()}>
        Logout form profile
      </button>
    </div>
  );
};

export default Profile;
