import React from "react";
import "./users.css";
import userProfileIterator from "../hooks/userProfile";

const users = () => {
  const [user, loading, previous, next] = userProfileIterator(
    "https://randomuser.me/api"
  );
  return (
    <div className="UserContatiner">
      {loading ? <div>Loading....</div> : <Card user={user} />}

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

const Card=({user}=>{
    <div className="Card">

        <div className=""></div>
    </div>
})

export default users;
