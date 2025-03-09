import { route } from "@react-router/dev/routes";

export default [route("/", "MainPage.jsx"), route("*", "catchall.jsx")];
