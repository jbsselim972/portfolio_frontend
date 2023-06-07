import { AppWrap, MotionWrap } from "../wrapper";
import Skills from "./Skills";

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
