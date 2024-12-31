import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";
import About from "../pages/About";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import Infrastructure from "../pages/Infrastructure";
import Admissions from "../pages/Admissions";
import Events from "../pages/Events";
import CourseSingle from "../pages/Course_Single";
import Admin from "../pages/Admin";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Routes>
        {routes.map((routeItem) => {
          return (
            <>
            <Route
              key={routeItem.component}
              path={"/"}
              element={<Home />}
            />
          </>
          );
        })}
      <Route key={"about"} path={"/about"}  element={<About />} />
      <Route key={"courses"} path={"/courses"}  element={<Courses />} />
      <Route key={"infrastructure"} path={"/infrastructure"}  element={<Infrastructure />} />
      <Route key={"admissions"} path={"/admissions"}  element={<Admissions />} />
      <Route key={"events"} path={"/events"}  element={<Events />} />
      <Route key={"courseSingle"} path={"/course"}  element={<CourseSingle />} />
      <Route key={"admin"} path={"/admin"}  element={<Admin />} />
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default Router;
