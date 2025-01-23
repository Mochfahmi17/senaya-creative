import { NavLink } from "react-router-dom";

function FooterComponent() {
  return (
    <>
      <section className="footer" id="footer">
        <h2>SENAYA CREATIVE</h2>
        <main>
          <div className="title">
            <h3>Hubungi Kami :</h3>
            <p className="desc">Terima kasih atas kunjungan Anda! Jika Anda memiliki pertanyaan, saran, atau memerlukan bantuan, jangan ragu untuk menghubungi kami melalui salah satu cara berikut :</p>
            <p>
              <b>Email :</b> senayaindonesia.sby@gmail.com
            </p>
            <p>
              <b>Telepon :</b> +62 857-4516-0032
            </p>
            <p>
              <b>Alamat :</b> Perumahan bukit bambe BU19 Driyorejo-Gresik, Jawa Timur, Indonesia
            </p>
          </div>
          <div className="link">
            <h3>Tautan</h3>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </div>
          <div className="subscribe">
            <h3>Subscribe</h3>
            <div className="input">
              <input type="email" placeholder="Email Anda..." />
              <button>Subscribe</button>
            </div>
          </div>
        </main>
        <div className="copyright">
          <p>
            created with ❤ by <a href="#">Mochammad Fahmi</a>.
          </p>
        </div>
      </section>
    </>
  );
}

export default FooterComponent;
