import { First } from "./components/first";
import { Video } from "./components/video";
import { Sec } from "./components/sec";
import { Third } from "./components/third";
import { Four } from "./components/four";
import { Contact } from "./components/contact";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <div>
      <First />
      <Video />
      <Sec />
      <Third />
      <Four />
      <Contact />
    </div>
  );
};

export default App;
