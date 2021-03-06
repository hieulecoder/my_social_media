import { IoChevronBack } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";

import styles from "./Conversation.module.css";

const Conversation = ({ backToList, showInfo }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.members}>
          {backToList && <IoChevronBack onClick={backToList} />}
          <div>Hieu Le</div>
        </div>
        <AiOutlineInfoCircle onClick={showInfo} />
      </div>
      <div></div>
    </div>
  );
};

export default Conversation;
