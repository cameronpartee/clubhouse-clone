import style from "../style/phoneConfirm.module.css";
import { Link } from "react-router-dom";

export const CodeConfirm = () => {
  return (
    <div className={style.phoneConfirmContainer}>
      <Link exact to="/get_username" className={style.backBtn}>
        <img src="/images.arrow.png" alt="" />
      </Link>
      <div className="text-center">
        <h1
          style={{
            paddingLeft: "5em",
            paddingRight: "5em",
            marginBottom: "1em",
          }}
        >
          Enter the code we just texted you
        </h1>
        <input
          type="text"
          style={{
            width: "70%",
            border: "none",
            textAlign: "center",
            outline: "none",
          }}
        />
        <p className="mt-2">
          Didn't recieve it? <span>Tap to resend.</span>
        </p>
      </div>
      <Link
        exact
        to="/allow_notification"
        className="primaryBtn d-flex align-items-center"
      >
        Next <img src="images/nextArrowIcon.svg" alt="" className="ml-1" />
      </Link>
    </div>
  );
};

export default CodeConfirm;
