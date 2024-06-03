import { Link } from "react-router-dom";
import { SlHome } from "react-icons/sl";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const routes = [
  { path: "/", breadcrumb: "Home" },
  { path: "/:projectname/project-upload", breadcrumb: "Upload" },
  { path: "/:projectname/transcript", breadcrumb: "Transcript" },
];

// map & render your breadcrumb components however you want.
const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <>
      {
        // map through the breadcrumbs and display each breadcrumb
        breadcrumbs.map(({ breadcrumb, match }, index) =>
          match.pathname === "/" ? (
            <Link
              to={match.pathname}
              key={index}
              style={{ textDecoration: "none" }}
            >
              <SlHome />
            </Link>
          ) : (
            <Link
              to={match.pathname}
              key={index}
              style={{ textDecoration: "none" }}
            >
              <span style={{ marginLeft: "5px" }}> / {breadcrumb} </span>
            </Link>
          )
        )
      }
    </>
  );
};

export default Breadcrumbs;
