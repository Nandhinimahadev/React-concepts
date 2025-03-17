import React from "react";
import useProfileIterator, { User } from "../hooks/userProfile";
import "./Users.css";

const Users = () => {
  const [user, loading, previous, next] = useProfileIterator(
    "https://randomuser.me/api"
  );

  return (
    <div className="UserContainer">
      {loading ? <Loader /> : <Card user={user} />}
      <div className="controls">
        <button className="previous" onClick={previous}>
          Previous
        </button>
        <button className="next" onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
};

type UserProps = {
  user: User;
};

const Card = ({ user }: UserProps) => (
  <div className="Card">
    <div className="topBG"></div>
    <div className="content">
      <div className="imgContainerBG">
        <div className="imgContainer">
          <img src={user?.thumbnail} alt={user?.name} />
        </div>
      </div>

      <div className="infos">
        <span className="fullName">{user?.name}</span>
        <span className="age">{user?.age} years</span>
      </div>

      <div className="phone">{user?.phone}</div>
      <div className="email">{user?.email}</div>
    </div>
  </div>
);

const Loader = () => (
  <div className="Card Loader">
    <div className="topBG"></div>
    <div className="content">
      <div className="imgContainerBG">
        <div className="imgContainer value"></div>
      </div>

      <div className="infos">
        <span className="fullName value"></span>
        <span className="age value"></span>
      </div>

      <div className="phone value"></div>
      <div className="email value"></div>
    </div>
  </div>
);

export default Users;
