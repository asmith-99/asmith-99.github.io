import { index, layout, route } from "@react-router/dev/routes";

export default [
  layout("Navbar.jsx", [
    index("AboutPage/AboutPage.jsx"),
    route("/projects", "ProjectsPage/ProjectsPage.jsx"),
    route("/resume", "ResumePage/ResumePage.jsx"),
    route("/stars", "StarsPage/StarsPage.jsx"),
  ]),
  route("*", "catchall.jsx"),
];
