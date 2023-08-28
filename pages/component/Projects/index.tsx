import { useEffect, useState, useRef } from "react";
import Header from "../Header"
import Scroller from '../Scroller'
import Project from "./Project"
import Footer from "../Footer";

export default function ProjectsPage() {
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

  useEffect(() => {
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
        <Project />
        <Footer />
      </Scroller>
    </div>
  )
}