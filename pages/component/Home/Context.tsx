import Link from "next/link"

export default function Context() {
  return (
    <div className="context">
      <div className="skills">
        <h4>Skills</h4>
        <div>
          <img src="/assets/img/skills.png" alt="" />
        </div>
      </div>
      <div className="archiving">
        <h4>Archiving</h4>
        <ul>
          <li>
            <h4>Github</h4>
            <span>그동안 작업한 프로젝트의 코드 저장소</span>
            <a target="_blank" className="btn" href='https://github.com/ms0kim'>Github/ms0kim</a>
          </li>
          <li>
            <h4>Velog</h4>
            <span>공부 및 지식 공유 목적의 블로그</span>
            <a target="_blank" className="btn" href="https://velog.io/@ms0kim">Velog/ms0kim</a>
          </li>
        </ul>
      </div>
      <div className="career">
        <h4>Career</h4>
        <ul>
          <li>
            <h4>지디에프랩</h4>
            <span>
              2023.03 - 2023.08<br/>
              Vue, Javascript, Django, Linux, HTML, CSS, Gitlab, Figma, Notion, Miro, Google Analytics
            </span>
            <p>
              AI 화질 개선 기술을 보유하였으며 해당 솔루션으로 Pikavue, G-enhancer, GDFPlay 서비스를 운영하고 있습니다<br/>
              웹 기획부터 디자인 퍼블리싱 프론트엔드까지 담당하여 B2C 서비스인 Pikavue를 새롭게 리뉴얼 하였고<br/>
              프로젝트를 마무리 하면서 회사와 저와의 방향성이 맞지 않아 퇴사하게 되었습니다
            </p>
          </li>
          <li>
            <h4>이젠컴퓨터학원</h4>
            <span>2022.07 - 2022.12</span>
            <p>
              국비 지원으로 컴퓨터 학원을 다니게 되었습니다<br/>
              HTML, CSS, Javascript, Jquery, Figma를 기초부터 탄탄하게 배우게 되었고 작업물로 최우수상을 수여 받았으며<br/>
              틈틈이 CS지식과 React 프레임워크를 독학하며 프론트엔드를 준비하였습니다
            </p>
          </li>
          <li>
            <h4>한우무역</h4>
            <span>2021.06 - 2022.06</span>
            <p>
              국내외 브랜드를 판매하는 편집샵을 운영합니다<br/>
              수입 브랜드와 국내에 새로 런칭하는 브랜드의 브랜딩 및 웹디자인 업무를 담당하였으며 백화점 팝업스토어와 마케팅 업무도 같이 진행하였습니다<br/>
              업무를 진행하면서 프론트엔드에 대한 진로 고민으로 인해 퇴사하게 되었습니다
            </p>
          </li>
          <li>
            <h4>우아한패밀리</h4>
            <span>2020.04 - 2021.06</span>
            <p>
              우아한패밀리는 카페 프랜차이즈 피에스타7 본사입니다<br/>
              기본적으로 브랜딩과 웹디자인을 담당하였으며 사진 촬영 및 마케팅 관련 업무도 진행하였습니다<br/>
              전체적인 브랜드의 베이스를 갖춘 후 퇴사하게 되었습니다
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}