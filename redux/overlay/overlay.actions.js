import {
  HIDE_OVERLAY,
  SHOW_CREATE_CONVERSATION,
  SHOW_POST,
} from "./overlay.types";

export const hideOverlay = () => ({ type: HIDE_OVERLAY });

export const showCreateConversation = () => ({
  type: SHOW_CREATE_CONVERSATION,
});

export const showPost = (postList, index = 0) => ({
  type: SHOW_POST,
  payload: {
    index,
    list: postList,
  },
});
