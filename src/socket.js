import { io } from "socket.io-client";

export const initSocket = async () => {
  const options = {
    transports: ["websocket"],
    forceNew: true,
    reconnectionAttempts: "Infinity",
    timeout: 10000,
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
  };

  return io(process.env.REACT_APP_BACKEND_URL, options);
};
