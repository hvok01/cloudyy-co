import './App.css';
import heroImage from './assets/hero-image.jpg';
import clipImage from './assets/clipping.jpg';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/all';
import { ScrollToPlugin } from 'gsap/all';
import furniture1 from './assets/furniture1.jpg'
import furniture2 from './assets/furniture2.jpg'
import furniture3 from './assets/furniture3.jpg'
import furniture4 from './assets/furniture4.jpg'
import decor1 from './assets/decor1.jpg'
import decor2 from './assets/decor2.jpg'
import decor3 from './assets/decor3.jpg'
import decor4 from './assets/decor4.jpg'
import office1 from './assets/office1.jpg'
import office2 from './assets/office2.jpg'
import office3 from './assets/office3.jpg'
import office4 from './assets/office4.jpg'
import nature1 from './assets/nature1.jpg'
import nature2 from './assets/nature2.jpg'
import nature3 from './assets/nature3.jpg'
import nature4 from './assets/nature4.jpg'
import lightIcon from './assets/light-icon-svg.svg';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

function App() {
  const container = useRef(null);

  useGSAP(() => {
    
    gsap.fromTo("#title", {
      scale: 2,
      y: -160,
      ease: "expo.inOut"
    }, {
      scale: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#title",
        end: "bottom top",
        invalidateOnRefresh: true,
        scrub: 2,
      }
    });

    // discover section anim

    const discoverTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".slide",
        scrub: 2,
        start: "top 20%",
      }
    })

    discoverTl.to(".slide1", {
      y: 220,
    })

    discoverTl.to(".slide2", {
      y: 220,
    })

    discoverTl.to(".slide3", {
      y: 220,
    })

    discoverTl.to(".slide4", {
      y: 240,
    });

    // circle animation

    gsap.to("#image-section2", {
      clipPath: "circle(100% at 50% 50%)",
      scrollTrigger: {
        trigger: "#image-section > .container",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
        pin: true,
        onEnter: () => {
          document.body.classList.add("dark-theme");
        },
        onLeaveBack: () => {
          document.body.classList.remove("dark-theme");
        }
      }
    });

    const gridWrapper = gsap.utils.toArray(".grid-items");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gridWrapper.forEach((wrapper: any) => {
      const boxes = wrapper?.querySelectorAll(".box");

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      boxes.forEach((box: any) => {

        gsap.from(box, {
          y: 500,
          duration: 0.5,
          scrollTrigger: {
            trigger: box,
            start: "top bottom",
            end: "bottom top",
            scrub: 4,
          }
        })

      });
    });

    const heading = document.querySelector(".furniture-title h2");
    const sections = gsap.utils.toArray(".grid-wrapper");

    gsap.timeline({
      scrollTrigger: {
        trigger: "#furniture-section > .container",
        start: "top 50%",
        end: "top 50%",
        scrub: 2,
        onEnter: () => {
          gsap.set(heading, {
            position: "fixed",
            bottom: 0,
            zIndex: -1000,
          })
        },
        onEnterBack: () => {
          gsap.set(heading, {
            position: "relative",
            bottom: 0,
          })
        },
      }
    })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sections.forEach((section: any, index: number) => {
      ScrollTrigger.create({
        trigger: section,
        start: "bottom-=20% bottom",
        end: "bottom top",
        onEnter: () => {
          updateHeading(index);
          if (index === 0) {
            document.body.classList.remove("dark-theme")
          }
        },
        onEnterBack: () => {
          updateHeading(index);
          if (index === 0) {
            document.body.classList.add("dark-theme")
          }
        },
      })
    });


    function updateHeading(index: number) {
      const headingTexts = ['Furniture', 'Decor', 'Office', 'Nature'];
      if (heading) {
        heading.textContent = headingTexts[index];
      }
    }

    updateHeading(0);


  }, { scope: container });


  return (
    <>
      {
        // parallax image
      }
      <div className="cover-image" style={{backgroundImage: `url(${heroImage})`}}></div>

      {
        // header
      }
      <div className="content-wrapper" ref={container}>

        <header id='site-header' className='is--nav'>
          <nav className='site-nav'>
            <ul>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Article</a></li>
              <li><a href="#">Contact</a></li>
            </ul>

            <div className="site-title" id='title'>
              <h1>Cloudyy&Co</h1>
            </div>

            <div className="copy-right">
              <p>&copy; 2025 All Rights Reserved</p>
            </div>
          </nav>
        </header>

        {
          // main section
        }

        <main id="site-main">

          <section className="discover" id='discover'>
            <div className="container">
              <div className="slide">
                <h1 className='slide1'>Discover</h1>
              </div>
              <div className="slide">
                <h1 className='slide2 lightWidth'>Trends</h1>
              </div>
              <div className="slide">
                <h1 className='slide3'>Minimal</h1>
              </div>
              <div className="slide">
                <h1 className='slide4'>Effort</h1>
              </div>
            </div>
          </section>

          <section className="image-section" id='image-section'>
            <div className="container">
              <div className="cover">
                <img src={clipImage} alt="clipping image" id='image-section2'/>
              </div>
            </div>
          </section>

          <section className="tag-section" id='tag-section'>
            <div className="container">
              <span>Home</span>
              <span>Travel</span>
              <span>Furniture</span>
              <span>Book</span>
              <span>Office</span>
              <span>Kitchen</span>
              <span>Lighting</span>
              <span>Fashion</span>
              <span>Bath & Bed</span>
              <span>Tech</span>
              <span>Decor</span>
              <span>More</span>
            </div>
          </section>

          <section className="furniture-section" id='furniture-section'>
            <div className="container">

              <div className="furniture-title">
                <h2>furniture</h2>
              </div>

              <div className="grid-wrapper">
                <div className="grid-items">
                  <div className="box">
                    <img src={furniture1} alt="furniture 1" />
                  </div>
                  <div className="box">
                    <img src={furniture2} alt="furniture 2" />
                  </div>
                  <div className="box">
                    <img src={furniture3} alt="furniture 3" />
                  </div>
                  <div className="box">
                    <img src={furniture4} alt="furniture 4" />
                  </div>
                </div>
              </div>

              <div className="grid-wrapper">
                <div className="grid-items">
                  <div className="box">
                    <img src={decor1} alt="decor 1" />
                  </div>
                  <div className="box">
                    <img src={decor2} alt="decor 2" />
                  </div>
                  <div className="box">
                    <img src={decor3} alt="decor 3" />
                  </div>
                  <div className="box">
                    <img src={decor4} alt="decor 4" />
                  </div>
                </div>
              </div>

              <div className="grid-wrapper">
                <div className="grid-items">
                  <div className="box">
                    <img src={office1} alt="office 1" />
                  </div>
                  <div className="box">
                    <img src={office2} alt="office 2" />
                  </div>
                  <div className="box">
                    <img src={office3} alt="office 3" />
                  </div>
                  <div className="box">
                    <img src={office4} alt="office 4" />
                  </div>
                </div>
              </div>

              <div className="grid-wrapper">
                <div className="grid-items">
                  <div className="box">
                    <img src={nature1} alt="nature 1" />
                  </div>
                  <div className="box">
                    <img src={nature2} alt="nature 2" />
                  </div>
                  <div className="box">
                    <img src={nature3} alt="nature 3" />
                  </div>
                  <div className="box">
                    <img src={nature4} alt="nature 4" />
                  </div>
                </div>
              </div>


            </div>
          </section>

          <footer className='footer'>
            <img src={lightIcon} alt="" />
            <p>&copy; 2025 All Rights Reserved</p>
            <p>Created with ❤️ by ♌</p>
          </footer>

        </main>

      </div>

    </>
  )
}

export default App
