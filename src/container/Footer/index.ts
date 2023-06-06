import Footer from "./Footer";
import { AppWrap, MotionWrap } from "../wrapper";

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
