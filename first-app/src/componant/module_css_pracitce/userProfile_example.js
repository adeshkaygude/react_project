import React from "react";
import style from "./UserProfile.module.css";

const UserProfile_example = () => {
  return (
    <>
      <h1 className={style.heading}>ExternalCss</h1>

      <div className="container">
        <div className={style.user_card}>
          <div>
            <img
              className={style.img_style}
              src="https://thumbs.dreamstime.com/b/user-sign-icon-person-symbol-human-avatar-rich-man-84519083.jpg"
              alt="User avatar"
            />
          </div>

          <div className={style.text_wrap}>
            <h4 className={style.heading}>adesh kaygude</h4>
            <p>Software developer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile_example;
