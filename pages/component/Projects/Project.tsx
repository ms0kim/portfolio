import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from "next/link";

export default function Project() {
  return (
    <div className="project">
      <h2>Projects</h2>
      <ul>
        <li className="cat">
          <div className='img'>
            <div></div>
            <img src="/assets/img/back1.png" alt="" />
          </div>
          <div>
            <div className="top">
              <p>2023 08</p>
              <h3>Cat service</h3>
              <a target='_blank' href="https://github.com/ms0kim/cat" className="abtn">github</a>
              <a target='_blank' href="https://cat-opal-seven.vercel.app/" className="abtn">url</a>
            </div>
            <div className="bottom">
              <ul>
                <li>
                  <span>주요기능</span>
                  <p>
                    API Routes 기능을 이용한 각 카테고리의 데이터베이스 API 구현<br/>
                    메인 페이지에서 한 눈에 볼 수 있도록 UI 배치<br/>
                    소통할 수 있는 게시판 기능 구현<br/>
                    Localstorage로 우리집 고양이 정보 등록 기능 구현
                  </p>
                </li>
                <li>
                  <span>Frontend</span>
                  <p>Next, Typesctipt, Swiper, CSS, Illust, Design</p>
                </li>
                <li>
                  <span>Backend</span>
                  <p>Next API Routes</p>
                </li>
                <li>
                  <span>Deployments</span>
                  <p>Vercel</p>
                </li>
                <li>
                  <span>Team</span>
                  <p>개인작업</p>
                </li>
              </ul>
            </div>
          </div>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            speed={1000}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
          >
            <SwiperSlide>
              <img src="/assets/img/cat1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/img/cat2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/img/cat3.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/img/cat4.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/img/cat5.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/img/cat6.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </li>
        <li className="pikavue">
          <div className='img'>
            <div></div>
            <img src="/assets/img/back2.jpg" alt="" />
          </div>
          <div>
            <div className="top">
              <p>2023 04 - 2023 05</p>
              <h3>Pikavue</h3>
              <a target='_blank' href="https://github.com/ms0kim/pikavue" className="abtn">github</a>
              <a target='_blank' href="https://pikavue.com/" className="abtn">url</a>
            </div>
            <div className="bottom">
              <ul>
                <li>
                  <span>주요기능</span>
                  <p>
                    AI 기술 사용 전후를 before, after로 시각적인 구현<br/>
                    Django에서 Conda 환경 사용하여 Forum 게시판 구현 (사이트에서 현재 비활성화)<br/>
                    한국어, 영어로 다국어 지원 기능 구현<br/>
                    시작하기를 누르면 현재 언어를 Route에 저장하여 Platform 사이트로 이동
                  </p>
                </li>
                <li>
                  <span>Frontend</span>
                  <p>Vue, Javascript, linux, Swiper, CSS, Design</p>
                </li>
                <li>
                  <span>Backend</span>
                  <p>Django, Conda</p>
                </li>
                <li>
                  <span>Deployments</span>
                  <p>Google cloud platform</p>
                </li>
                <li>
                  <span>Team</span>
                  <p>GDFLab 서비스 팀 / 기획, 디자인, 퍼블리싱, 프론트엔드</p>
                </li>
              </ul>
            </div>
          </div>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            speed={1000}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
          >
            <SwiperSlide>
              <img src="/assets/img/pikavue1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/img/pikavue2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/img/pikavue3.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/img/pikavue4.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/img/pikavue5.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </li>
        <li className="platform">
          <div className='img'>
            <div></div>
            <img src="/assets/img/back3.jpg" alt="" />
          </div>
          <div>
            <div className="top">
              <p>2023 05 - 2023 07</p>
              <h3>GDF Platform</h3>
              <a target='_blank' href="https://github.com/ms0kim/platform" className="abtn">github</a>
              <a target='_blank' href="https://platform.gdflab.com/" className="abtn">url</a>
            </div>
            <div className="bottom">
              <ul>
                <li>
                  <span>주요기능</span>
                  <p>
                    보유하고 있는 기술을들 한 눈에 볼 수 있도록 메인 페이지에 구성<br/>
                    API 연결하여 이미지, 동영상 리스트 및 업로드 구현<br/>
                    Keycloak 연결하여 로그인 기능 구현<br/>
                    한국어, 영어로 다국어 지원 기능 구현
                  </p>
                </li>
                <li>
                  <span>Frontend</span>
                  <p>Vue, Javascript, Keycloak, linux, CSS, Design</p>
                </li>
                <li>
                  <span>Deployments</span>
                  <p>Google cloud platform</p>
                </li>
                <li>
                  <span>Team</span>
                  <p>GDFLab 서비스 팀 / 기획, 디자인, 퍼블리싱, 프론트엔드</p>
                </li>
              </ul>
            </div>
          </div>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            speed={1000}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
          >
            <SwiperSlide>
              <img src="/assets/img/platform1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/img/platform2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/img/platform3.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/img/platform4.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/img/platform5.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </li>
        <li className="play">
          <div className='img'>
            <div></div>
            <img src="/assets/img/back4.jpg" alt="" />
          </div>
          <div>
            <div className="top">
              <p>2023 03 - 2023 04</p>
              <h3>GDFplay</h3>
              <a target='_blank' href="https://github.com/ms0kim/gdfplay" className="abtn">github</a>
              <a target='_blank' href="https://gdfplay.io/" className="abtn">url</a>
            </div>
            <div className="bottom">
              <ul>
                <li>
                  <span>주요기능</span>
                  <p>
                    기술에 대한 이해도를 높이기 위한 메인 페이지 구성<br/>
                    API 연결하여 동영상 업로드 구현<br/>
                    Keycloak 연결하여 로그인 기능 구현
                  </p>
                </li>
                <li>
                  <span>Frontend</span>
                  <p>Vue, Javascript, Keycloak, linux, CSS</p>
                </li>
                <li>
                  <span>Deployments</span>
                  <p>Google cloud platform</p>
                </li>
                <li>
                  <span>Team</span>
                  <p>GDFLab 서비스 팀 / 퍼블리싱, 프론트엔드</p>
                </li>
              </ul>
            </div>
          </div>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            speed={1000}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
          >
            <SwiperSlide>
              <img src="/assets/img/play1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/img/play3.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/img/play2.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </li>
        <li className="portfolio">
          <div className='img'>
            <div></div>
            <img src="/assets/img/back5.png" alt="" />
          </div>
          <div>
            <div className="top">
              <p>2022 12 - 2023 01</p>
              <h3>First portfolio</h3>
              <a target='_blank' href="https://github.com/ms0kim/first" className="abtn">github</a>
              <a target='_blank' href="https://kmsong.cafe24.com/" className="abtn">url</a>
            </div>
            <div className="bottom">
              <ul>
                <li>
                  <span>주요기능</span>
                  <p>
                    저만의 일러스트를 담은 원페이지 구성<br/>
                    프로젝트를 클릭하면 연결되는 디테일 페이지<br/>
                    Swiper를 활용하여 다양한 슬라이드 기능 구현
                  </p>
                </li>
                <li>
                  <span>Frontend</span>
                  <p>Javascript, Swiper, CSS, Design</p>
                </li>
                <li>
                  <span>Deployments</span>
                  <p>Dothome</p>
                </li>
                <li>
                  <span>Team</span>
                  <p>개인작업</p>
                </li>
              </ul>
            </div>
          </div>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            speed={1000}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
          >
            <SwiperSlide>
              <img src="/assets/img/first1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/img/first2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/img/first3.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/img/first4.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/img/first5.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </li>
        <li className="blog">
          <div className='img'>
            <div></div>
            <img src="/assets/img/back6.png" alt="" />
          </div>
          <div>
            <div className="top">
              <p>2023 02</p>
              <h3>Blog project</h3>
              <a target='_blank' href="https://github.com/ms0kim/blog" className="abtn">github</a>
              <a target='_blank' href="https://react-blog.herokuapp.com/" className="abtn">url</a>
            </div>
            <div className="bottom">
              <ul>
                <li>
                  <span>주요기능</span>
                  <p>
                    Json server 사용하여 게시판 리스트 및 업로드와 검색 기능 구현<br/>
                    로그인 하면 관리자 모드로 포스트 관리 기능 구현<br/>
                    관리자 모드로 포스트 공개/비공개 작성 구현
                  </p>
                </li>
                <li>
                  <span>Frontend</span>
                  <p>React, Redux, Javascript, Json server, Heroku, CSS, Design</p>
                </li>
                <li>
                  <span>Deployments</span>
                  <p>Heroku</p>
                </li>
                <li>
                  <span>Team</span>
                  <p>개인작업</p>
                </li>
              </ul>
            </div>
          </div>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            speed={1000}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
          >
            <SwiperSlide>
              <img src="/assets/img/blog1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/img/blog2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/img/blog3.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/img/blog4.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </li>
      </ul>
    </div>
  )
}