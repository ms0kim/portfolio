import Link from "next/link"

export default function Footer() {
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
            Javascript / Typescript / Next / Vue / React / Redux<br/>
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
        <li>
          <button className="subBtn">Github</button>
          <button className="subBtn">Velog</button>
          <button className="subBtn">KakaoTalk</button>
        </li>
        <li>
          <Link href="/projects">Projects<i className="ri-arrow-right-line"></i></Link>
          <p>All Rights Reserved</p>
        </li>
      </ul>
    </div>
  )
}