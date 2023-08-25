import { useEffect, useState, useRef } from "react";
import Header from "../Header"
import Scroller from '../Scroller'
import Project from "./Project"
import Footer from "../Footer";

export default function ProjectsPage() {
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

  useEffect(() => { //마운트 return하면 언마운트
    console.log(window.scrollY)
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