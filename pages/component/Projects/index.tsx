import { useEffect, useState, useRef } from "react";
import Header from "../Header"
import Scroller from '../Scroller'
import Project from "./Project"
import Footer from "../Footer";
import Link from "next/link";

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

  useEffect(() => {
  },[]);
  
  return (
    <div onWheel={handleOnWheel}>
      <Header hide={hide} />
      <Scroller>
        <div className="header mobile">
          <ul className={hide ? 'hide' : ''}>
            <li className='left'>
              <Link href='/'>
                About
              </Link>
            </li>
            <li className="center">
              <Link href='/'>
                <img src="/assets/img/logo.svg" alt="" />
              </Link>
            </li>
            <li className='right'>
              <Link href="/projects" className="btn"><i className="ri-flashlight-fill"></i>Projects</Link>
            </li>
          </ul>
        </div>
        <Project />
        <Footer />
      </Scroller>
    </div>
  )
}