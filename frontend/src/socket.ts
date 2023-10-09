import { io } from "socket.io-client";
const URL: string = "https://next-nest-api.onrender.com/";

export const socket = io(URL);
