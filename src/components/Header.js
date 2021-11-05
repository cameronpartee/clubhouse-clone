import { Link } from "react-router-dom";
import style from "../style/header.module.css";

export default function Header() {
  return (
    <div className={style.Header}>
      <Link exact to="/explore">
        <img src="/images/search.png" alt="" />
      </Link>
      <div className={style.nav_items}>
        <Link exact to="/friends_invite">
          <img src="/images/invite.png" alt="" />
        </Link>
      </div>
    </div>
  );
}
