import { route } from "@react-router/dev/routes";

export default [
  route("/", "MainPage/MainPage.jsx"),
  route("*", "catchall.jsx"),
];
