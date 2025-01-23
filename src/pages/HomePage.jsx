import { NavLink } from "react-router-dom";
import "animate.css";

import hero from "../assets/img/hero-1.png";
import about from "../assets/img/about-img.jpg";
import wedding from "../assets/img/wedding.png";
import birthday from "../assets/img/birthday.png";
import model from "../assets/img/beauty.png";
import montain from "../assets/img/montain.png";
import camera from "../assets/img/camera.png";
import clothes from "../assets/img/clothes.png";
import desain from "../assets/img/desain.png";
import video from "../assets/img/videografi.png";

function HomePage() {
  const handleClick = () => {
    window.location.href = "https://api.whatsapp.com/send/?phone=6285608819031&text&type=phone_number&app_absent=0";
  };
  return (
    <>
      <section className="hero">
        <main>
          <div className="content">
            <h1>SENAYA CREATIVE</h1>
            <p>
              Sedang mencari jasa fotografi profesional ? Di <span>SENAYA CREATIVE</span>, kami berkomitmen untuk mengabadikan setiap momen spesial Anda dengan sempurna. Dari pernikahan dan ulang tahun hingga acara perusahaan dan sesi foto
              pribadi, kami siap memenuhi segala kebutuhan fotografi Anda.
            </p>
            <div className="btn">
              <button onClick={handleClick}>Hubungi Kami</button>
            </div>
          </div>
          <div className="hero-image">
            <img src={hero} alt="" />
          </div>
        </main>
      </section>

      {/* About Section Start */}
      <section className="about" id="about">
        <main>
          <div className="content">
            <h2>Tentang Kami</h2>
            <p>
              Halo! Selamat datang di <span>Senaya Creative</span>, kami adalah penyedia jasa fotografi yang berbasis di Surabaya. Sejak 4 tahun lalu, saya telah jatuh cinta dengan dunia fotografi. Bagi saya, fotografi adalah tentang
              menangkap momen, emosi, dan cerita di balik setiap gambar.
            </p>
            <p>Dengan kombinasi kreativitas dan keahlian teknis, saya berfokus pada potrait, landscape, pernikahan, komersial, dll.</p>
            <p>Kami juga menyediakan jasa lainnya seperti desain grafis dan videografi. Kami selalu berusaha memberikan hasil yang tidak hanya indah tetapi juga bermakna.</p>
          </div>
          <div className="about-img">
            <img src={about} alt="About" />
          </div>
        </main>
      </section>
      {/* About Section End */}

      {/* Service Section Start */}
      <div className="service" id="service">
        <h2>Layanan Kami</h2>
        <p>Berikut layanan kami yang bisa kami berikan kepada anda :</p>
        <main>
          <div className="card">
            <div className="icon-img">
              <img src={wedding} alt="" />
            </div>
            <div className="content">
              <h3>Fotografi Pernikahan</h3>
              <p>Abadikan Momen Spesial Anda dengan Fotografi Pernikahan Profesional.</p>
            </div>
          </div>
          <div className="card">
            <div className="icon-img">
              <img src={birthday} alt="" />
            </div>
            <div className="content">
              <h3>Fotografi Ulang Tahun</h3>
              <p>Abadikan Momen Ulang Tahun Spesial Anda dengan Fotografi Profesional.</p>
            </div>
          </div>
          <div className="card">
            <div className="icon-img">
              <img src={model} alt="" />
            </div>
            <div className="content">
              <h3>Fotografi Model</h3>
              <p>Jadikan kesempatan Anda sebagai model menjadi bersinar dengan Fotografi Model Profesional.</p>
            </div>
          </div>
          <div className="card">
            <div className="icon-img">
              <img src={clothes} alt="" />
            </div>
            <div className="content">
              <h3>Fotografi Produk</h3>
              <p>Jadikan produk anda memiliki kualitas foto kualitas terbaik dengan Fotografi produk Profesional.</p>
            </div>
          </div>
          <div className="card">
            <div className="icon-img">
              <img src={montain} alt="" />
            </div>
            <div className="content">
              <h3>Fotografi Landskape</h3>
              <p>Jadikan momen perjalanan Anda menjadi memori yang indah dengan Fotografi landskape Profesional.</p>
            </div>
          </div>
          <div className="card">
            <div className="icon-img">
              <img src={camera} alt="" />
            </div>
            <div className="content">
              <h3>Jenis fotografi lainnya</h3>
              <p>Kami juga menerima jasa fotografi Profesional lainnya.</p>
            </div>
          </div>
          <div className="card">
            <div className="icon-img">
              <img src={desain} alt="" />
            </div>
            <div className="content">
              <h3>Desain Grafis</h3>
              <p>Kami juga menerima jasa desain grafis lainnya seperti logo desain, poster, mockup, dll.</p>
            </div>
          </div>
          <div className="card">
            <div className="icon-img">
              <img src={video} alt="" />
            </div>
            <div className="content">
              <h3>Videografi</h3>
              <p>Kami juga menerima jasa videografi untuk anda yang siap menemani moment berharga anda.</p>
            </div>
          </div>
        </main>
        <div className="portfolio-btn">
          <NavLink to="/portfolio">Lihat Portfolio</NavLink>
        </div>
      </div>
      {/* Service Section End */}

      {/* Contact Section Start */}
      <section className="contact" id="contact">
        <h2>Kontak Kami</h2>
        <p>Silahkan kontak kami dengan melalui sosial media kami dibawah berikut : </p>
        <main>
          <div className="card">
            <h3>Whatsapp</h3>
            <a href="https://api.whatsapp.com/send/?phone=6285745160032&text&type=phone_number&app_absent=0" className="social-media animate__animated animate__pulse animate__infinite" target="_blank">
              <i className="fa-brands fa-whatsapp"></i>
              <p>0857-4516-0032</p>
            </a>
          </div>
          <div className="card">
            <h3>Instagram</h3>
            <a href="https://www.instagram.com/senaya_creative96" className="social-media animate__animated animate__pulse animate__infinite" target="_blank">
              <i className="fa-brands fa-instagram"></i>
              <p>senaya_creative96</p>
            </a>
          </div>
          <div className="card">
            <h3>Email</h3>
            <a href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=senayaindonesia.sby@gmail.com" className="social-media animate__animated animate__pulse animate__infinite" target="_blank">
              <i className="fa-regular fa-envelope"></i>
              <p>senayaindonesia.sby@gmail.com</p>
            </a>
          </div>
        </main>
      </section>
      {/* Contact Section End */}
    </>
  );
}

export default HomePage;
