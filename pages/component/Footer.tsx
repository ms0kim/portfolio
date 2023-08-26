import Link from "next/link"
import { useRouter } from "next/router"

export default function Footer() {
  const route = useRouter();

  return (
    <div className='footer'>
      <h2>Contact</h2>
      <ul className="top">
        <li>
          <span>Kim min song</span>
          <p>
            1996.11.01 콘텐츠디자인과 졸업<br/>
            이젠컴퓨터학원 UXUI WEB & APP 퍼블리셔 과정 수료
          </p>
        </li>
        <li>
          <span>Service</span>
          <p>
            Frontend / Publishing<br/>
            UXUI Design / Branding Design
          </p>
        </li>
        <li>
          <span>Technologies</span>
          <p>
            Javascript / Typescript / Next / Vue / React<br/>
            jQuery / Bootstrap / Django / Conda / Heroku
          </p>
        </li>
      </ul>
      <div className="img">
        <img src="/assets/img/me2.jpg" alt="" />
      </div>
      <div className="center">
        <span>Get in Touch</span>
        <h3>ms0kim@naver.com</h3>
      </div>
      <ul className="bottom">
        <li>
          <span>Phone</span>
          <p>
            01092964966
          </p>
        </li>
        <li className="btns">
          <a target="_blank" href='https://github.com/ms0kim' className="subBtn">Github</a>
          <a target="_blank" href='https://velog.io/@ms0kim' className="subBtn">Velog</a>
          <a target="_blank" href='https://open.kakao.com/o/s2fQhfbd' className="subBtn">KakaoTalk</a>
        </li>
        <li className="menu">
          {route.pathname == '/'
            ?
            <Link href="/projects">Projects<i className="ri-arrow-right-line"></i></Link>
            :
            <Link href="/">About<i className="ri-arrow-right-line"></i></Link>
          }
          <p>All Rights Reserved</p>
        </li>
      </ul>
    </div>
  )
}