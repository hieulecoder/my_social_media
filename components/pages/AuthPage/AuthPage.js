import React, { useReducer, useState } from "react";
import { GiStripedSun } from "react-icons/gi";

import {
  renderInput,
  renderAuthSwitchMessage,
  reducer,
  INITIAL_STATE,
} from "./AuthPage.utils";

import styles from "./AuthPage.module.css";
import Link from "next/link";

const AuthPage = ({ authType }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isSubmitDisabled) {
      console.log("submit");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <GiStripedSun className="appLogo" />
        <div className={styles.headerMessage}>
          {`${
            authType === "login" ? "Log in" : "Sign up"
          } to see photos and videos from your friends.`}
        </div>
        <hr />
        <form className={styles.form}>
          {renderInput(authType, state, dispatch)}
          <button
            className={`${styles.submitButton} ${
              isSubmitDisabled && styles.disabled
            }`}
            onClick={(e) => handleSubmit(e)}
          >
            {authType === "login" ? "Log in" : "Sign up"}
          </button>
        </form>
      </div>
      {renderAuthSwitchMessage(authType)}

      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
};

export default AuthPage;
