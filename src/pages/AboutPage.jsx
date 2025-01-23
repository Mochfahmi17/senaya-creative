import about from "../assets/img/about-img.jpg";
function AboutPage() {
  return (
    <>
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
    </>
  );
}

export default AboutPage;
