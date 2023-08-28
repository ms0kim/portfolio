import { useEffect, useState, useRef } from "react";
import Header from "../Header"
import Scroller from '../Scroller'
import Title from "./Title"
import Slide from "./Slide"
import Context from "./Context";
import Footer from "../Footer";

export default function HomePage() {
  const [hide, setHide] = useState(false);
  const handleOnWheel = (e:any) => {
    if (e.nativeEvent.wheelDelta > 0) {
      // scroll up event
      setHide(false);
    } else {
      // scroll down event 
      setHide(true);
    }
  }
  const handleTouchMove = (e:any) => {
    if (e.touches[0].clientY > 0) {
      setHide(true);
    } else {
      setHide(false);
    }
  }

  useEffect(() => { //마운트 return하면 언마운트
    window.addEventListener("touchmove", handleTouchMove);
    return () => {
      window.removeEventListener("touchmove", handleTouchMove);
    };
  },[]);

  return (
    <div onWheel={handleOnWheel}>
      <Header hide={hide} />
      <Scroller>
        <Title />
        <Slide />
        <Context />
        <Footer />
      </Scroller>
    </div>
  )
}