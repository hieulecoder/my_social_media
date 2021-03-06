import { useState } from "react";
import Conversation from "../../../elements/Conversation/Conversation";
import ConversationInfo from "../../../elements/ConversationInfo/ConversationInfo";
import ConversationsList from "../../../elements/ConversationsList/ConversationsList";
import CreateConversation from "../../../elements/CreateConversation/CreateConversation";

import styles from "./CompactPage.module.css";

const CompactPage = () => {
  const [tab, setTab] = useState("list"); //list, conversation, create, info

  const renderTab = () => {
    if (tab === "list") {
      return <ConversationsList setTab={setTab} />;
    } else if (tab === "conversation") {
      return (
        <Conversation
          backToList={() => setTab("list")}
          showInfo={() => setTab("info")}
        />
      );
    } else if (tab === "create") {
      return <CreateConversation backToList={() => setTab("list")} />;
    } else if (tab === "info") {
      return (
        <ConversationInfo backToConversation={() => setTab("conversation")} />
      );
    }
  };

  return <div className={styles.container}>{renderTab()}</div>;
};

export default CompactPage;
