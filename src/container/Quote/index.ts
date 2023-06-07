import { AppWrap, MotionWrap } from "../wrapper";
import Quote from "./Quote";

export default AppWrap(
  MotionWrap(Quote, "app__quote"),
  "quote",
  "app__whitebg"
);
