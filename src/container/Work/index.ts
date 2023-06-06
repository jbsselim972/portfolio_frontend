import { AppWrap, MotionWrap } from "../wrapper";
import Work from "./Work";

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
