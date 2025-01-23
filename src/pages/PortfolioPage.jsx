import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// Image
import port1 from "../assets/img/portfolio/1.jpeg";
import port2 from "../assets/img/portfolio/2.jpeg";
import port3 from "../assets/img/portfolio/3.jpeg";
import port4 from "../assets/img/portfolio/4.jpeg";
import port5 from "../assets/img/portfolio/5.jpeg";
import port6 from "../assets/img/portfolio/6.jpeg";
import port7 from "../assets/img/portfolio/7.jpeg";
import port8 from "../assets/img/portfolio/8.jpeg";
import port9 from "../assets/img/portfolio/9.jpeg";
import port10 from "../assets/img/portfolio/10.jpeg";
import port11 from "../assets/img/portfolio/11.jpeg";
import port12 from "../assets/img/portfolio/12.jpeg";
import port13 from "../assets/img/portfolio/13.jpeg";
import port14 from "../assets/img/portfolio/14.jpeg";
import port15 from "../assets/img/portfolio/15.jpeg";
import port16 from "../assets/img/portfolio/16.jpeg";
import port17 from "../assets/img/portfolio/17.jpeg";
import port18 from "../assets/img/portfolio/18.jpeg";
import port19 from "../assets/img/portfolio/19.jpeg";
import port20 from "../assets/img/portfolio/20.jpeg";
import port21 from "../assets/img/portfolio/21.jpeg";

function PortfolioPage() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <section className="portfolio">
      <div className="title">
        <h2>Portofolio Kami</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptates!</p>
      </div>
      <div className="App">
        <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
          <a href={port1}>
            <img alt="img1" src={port1} />
          </a>
          <a href={port2}>
            <img alt="img2" src={port2} />
          </a>
          <a href={port3}>
            <img alt="img3" src={port3} />
          </a>
          <a href={port4}>
            <img alt="img4" src={port4} />
          </a>
          <a href={port5}>
            <img alt="img5" src={port5} />
          </a>
          <a href={port6}>
            <img alt="img6" src={port6} />
          </a>
          <a href={port7}>
            <img alt="img7" src={port7} />
          </a>
          <a href={port8}>
            <img alt="img8" src={port8} />
          </a>
          <a href={port9}>
            <img alt="img9" src={port9} />
          </a>
          <a href={port10}>
            <img alt="img10" src={port10} />
          </a>
          <a href={port11}>
            <img alt="img11" src={port11} />
          </a>
          <a href={port12}>
            <img alt="img12" src={port12} />
          </a>
          <a href={port13}>
            <img alt="img13" src={port13} />
          </a>
          <a href={port14}>
            <img alt="img14" src={port14} />
          </a>
          <a href={port15}>
            <img alt="img15" src={port15} />
          </a>
          <a href={port16}>
            <img alt="img16" src={port16} />
          </a>
          <a href={port17}>
            <img alt="img17" src={port17} />
          </a>
          <a href={port18}>
            <img alt="img18" src={port18} />
          </a>
          <a href={port19}>
            <img alt="img19" src={port19} />
          </a>
          <a href={port20}>
            <img alt="img20" src={port20} />
          </a>
          <a href={port21}>
            <img alt="img21" src={port21} />
          </a>
        </LightGallery>
      </div>
    </section>
  );
}

export default PortfolioPage;
