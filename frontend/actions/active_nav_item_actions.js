export const RECEIVE_ACTIVE_NAV_ITEM = "RECEIVE_ACTIVE_NAV_ITEM";

export const BROWSE = "browse";
export const YOUR_MUSIC = "yourMusic";
export const FOLLOW = "follow";

export const receiveActiveNavItem = (name) => {
  return {
    type: RECEIVE_ACTIVE_NAV_ITEM,
    activeNavItem: { [name]: true }
  };
};
