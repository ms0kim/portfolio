import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

export default function Slide() {
  return(
    <div className='slide'>
      <div className='pc'>
        <Swiper
          spaceBetween={50}
          slidesPerView={2.2}
          speed={2000}
          autoplay={{
            delay: 3000
          }}
          navigation
          pagination={{ clickable: true }}
          modules={[Autoplay, Navigation, Pagination]}
        >
          <SwiperSlide>
            <div>
              <span className='subBtn'>Development</span>
              <span className='subBtn'>Publishing</span>
              <span className='subBtn'>Design</span>
            </div>
            <Link href="/projects">Project View</Link>
            <h4>Cat service<p>project</p></h4>
            <img src="/assets/img/project1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <span className='subBtn'>Development</span>
              <span className='subBtn'>Publishing</span>
              <span className='subBtn'>Design</span>
            </div>
            <Link href="/projects">Project View</Link>
            <h4>Pikavue service<p>project</p></h4>
            <img src="/assets/img/project2.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <span className='subBtn'>Development</span>
              <span className='subBtn'>Publishing</span>
              <span className='subBtn'>Design</span>
            </div>
            <Link href="/projects">Project View</Link>
            <h4>Platform service<p>project</p></h4>
            <img src="/assets/img/project3.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <span className='subBtn'>Development</span>
              <span className='subBtn'>Publishing</span>
            </div>
            <Link href="/projects">Project View</Link>
            <h4>GDFplay service<p>project</p></h4>
            <img src="/assets/img/project4.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <span className='subBtn'>Development</span>
              <span className='subBtn'>Publishing</span>
              <span className='subBtn'>Design</span>
            </div>
            <Link href="/projects">Project View</Link>
            <h4>First portfolio<p>project</p></h4>
            <img src="/assets/img/project5.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <span className='subBtn'>Development</span>
              <span className='subBtn'>Publishing</span>
              <span className='subBtn'>Design</span>
            </div>
            <Link href="/projects">Project View</Link>
            <h4>Blog<p>project</p></h4>
            <img src="/assets/img/project6.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='mobile'>
        <Swiper
          spaceBetween={50}
          slidesPerView={1.2}
          speed={2000}
          autoplay={{
            delay: 3000
          }}
          navigation
          pagination={{ clickable: true }}
          modules={[Autoplay, Navigation, Pagination]}
        >
          <SwiperSlide>
            <div>
              <span className='subBtn'>Development</span>
              <span className='subBtn'>Publishing</span>
              <span className='subBtn'>Design</span>
            </div>
            <Link href="/projects">Project View</Link>
            <h4>Cat service<p>project</p></h4>
            <img src="/assets/img/project1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <span className='subBtn'>Development</span>
              <span className='subBtn'>Publishing</span>
              <span className='subBtn'>Design</span>
            </div>
            <Link href="/projects">Project View</Link>
            <h4>Pikavue service<p>project</p></h4>
            <img src="/assets/img/project2.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <span className='subBtn'>Development</span>
              <span className='subBtn'>Publishing</span>
              <span className='subBtn'>Design</span>
            </div>
            <Link href="/projects">Project View</Link>
            <h4>Platform service<p>project</p></h4>
            <img src="/assets/img/project3.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <span className='subBtn'>Development</span>
              <span className='subBtn'>Publishing</span>
            </div>
            <Link href="/projects">Project View</Link>
            <h4>GDFplay service<p>project</p></h4>
            <img src="/assets/img/project4.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <span className='subBtn'>Development</span>
              <span className='subBtn'>Publishing</span>
              <span className='subBtn'>Design</span>
            </div>
            <Link href="/projects">Project View</Link>
            <h4>First portfolio<p>project</p></h4>
            <img src="/assets/img/project5.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <span className='subBtn'>Development</span>
              <span className='subBtn'>Publishing</span>
              <span className='subBtn'>Design</span>
            </div>
            <Link href="/projects">Project View</Link>
            <h4>Blog<p>project</p></h4>
            <img src="/assets/img/project6.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='mobile2'>
        <Swiper
          spaceBetween={20}
          slidesPerView={1.1}
          speed={2000}
          autoplay={{
            delay: 3000
          }}
          navigation
          pagination={{ clickable: true }}
          modules={[Autoplay, Navigation, Pagination]}
        >
          <SwiperSlide>
            <Link href="/projects">
              <div>
                <span className='subBtn'>Development</span>
                <span className='subBtn'>Publishing</span>
                <span className='subBtn'>Design</span>
              </div>
              <h4>Cat service<p>project</p></h4>
              <img src="/assets/img/project1.png" alt="" />
           </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/projects">
              <div>
                <span className='subBtn'>Development</span>
                <span className='subBtn'>Publishing</span>
                <span className='subBtn'>Design</span>
              </div>
              <h4>Pikavue service<p>project</p></h4>
              <img src="/assets/img/project2.png" alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href='/projects'>
              <div>
                <span className='subBtn'>Development</span>
                <span className='subBtn'>Publishing</span>
                <span className='subBtn'>Design</span>
              </div>
              <h4>Platform service<p>project</p></h4>
              <img src="/assets/img/project3.png" alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href='/projects'>
              <div>
                <span className='subBtn'>Development</span>
                <span className='subBtn'>Publishing</span>
              </div>
              <h4>GDFplay service<p>project</p></h4>
              <img src="/assets/img/project4.png" alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href='/projects'>
              <div>
                <span className='subBtn'>Development</span>
                <span className='subBtn'>Publishing</span>
                <span className='subBtn'>Design</span>
              </div>
              <h4>First portfolio<p>project</p></h4>
              <img src="/assets/img/project5.png" alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href='/projects'>
              <div>
                <span className='subBtn'>Development</span>
                <span className='subBtn'>Publishing</span>
                <span className='subBtn'>Design</span>
              </div>
              <h4>Blog<p>project</p></h4>
              <img src="/assets/img/project6.png" alt="" />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}