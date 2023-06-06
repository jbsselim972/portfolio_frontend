import { AppWrap, MotionWrap } from "../wrapper";
import About from "./About";

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__primarybg"
);
