function ContactPage() {
  return (
    <>
      <section className="contact" id="contact">
        <h2>Kontak Kami</h2>
        <p>Silahkan kontak kami dengan melalui sosial media kami dibawah berikut : </p>
        <main>
          <div className="card">
            <h3>Whatsapp</h3>
            <a href="https://api.whatsapp.com/send/?phone=6285608819031&text&type=phone_number&app_absent=0" className="social-media animate__animated animate__pulse animate__infinite" target="_blank">
              <i className="fa-brands fa-whatsapp"></i>
              <p>0856-0881-9031</p>
            </a>
          </div>
          <div className="card">
            <h3>Instagram</h3>
            <a href="https://www.instagram.com/rizkydwi.agustian" className="social-media animate__animated animate__pulse animate__infinite" target="_blank">
              <i className="fa-brands fa-instagram"></i>
              <p>rizkydwi.agustian</p>
            </a>
          </div>
          <div className="card">
            <h3>Email</h3>
            <a href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=cakpurbo1927@gmail.com" className="social-media animate__animated animate__pulse animate__infinite" target="_blank">
              <i className="fa-regular fa-envelope"></i>
              <p>cakpurbo1927</p>
            </a>
          </div>
        </main>
      </section>
    </>
  );
}

export default ContactPage;
