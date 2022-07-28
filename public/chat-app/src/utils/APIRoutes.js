const host="http://localhost:5000";

export const registerRouter=`${host}/api/auth/register`
export const loginRouter=`${host}/api/auth/login`
export const setAvatarRoute =`${host}/api/auth/setAvatar`
export const logoutRoute = `${host}/api/auth/logout`;
export const allUsersRoute = `${host}/api/auth/allusers`;
export const sendMessageRoute = `${host}/api/messages/addmsg`;
export const recieveMessageRoute = `${host}/api/messages/getmsg`;

