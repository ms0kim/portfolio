import { useEffect, useState, useRef } from "react";
import Header from "../Header"
import Scroller from '../Scroller'
import Title from "./Title"
import Slide from "./Slide"
import Context from "./Context";
import Footer from "../Footer";

export default function HomePage() {
  const [hide, setHide] = useState(false);
  const [touchStartY, setTouchStartY] = useState(null);

  const handleOnWheel = (e:any) => {
    if (e.nativeEvent.wheelDelta > 0) {
      // scroll up event
      setHide(false);
    } else {
      // scroll down event 
      setHide(true);
    }
  }
  const handleTouchStart = (e:any) => {
    setTouchStartY(e.touches[0].clientY);
  }
  const handleTouchMove = (e:any) => {
    if (touchStartY !== null) {
      const deltaY = e.touches[0].clientY - touchStartY;

      if (deltaY > 10) {
        setHide(true);
      } else if (deltaY < -10) {
        setHide(false);
      }

      setTouchStartY(null);
    }
  }

  useEffect(() => { //마운트 return하면 언마운트
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
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