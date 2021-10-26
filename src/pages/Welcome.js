import React from "react";
import style from "../style/Welcome.module.css";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className={style.WelcomeContainer}>
      <h1>Welcome!</h1>
      <div className={style.WelcomeInfo}>
        <p>
          We are working hard to get clubhouse ready for everyone! While we wrap
          up the finishing touches, we are adding people gradually to make sure
          nothing breaks
        </p>
        <p>
          Anyone can join with an invite from an existing user - or reserve your
          username and we will text you if you have a friend on the app who can
          let you in. We are so grateful you are here and can't wait to have you
          join!
        </p>
        <p>Cameron & the Clubhouse team</p>
      </div>
      <div className={style.actionBtn}>
        <Link
          exact
          to="/get_username"
          className="primaryBtn d-flex align-items-center mb-3"
        >
          Get your username {/* <img src="" alt="" /> */}
        </Link>
        <Link>Have an invite? Sign In</Link>
      </div>
    </div>
  );
};

export default Welcome;
