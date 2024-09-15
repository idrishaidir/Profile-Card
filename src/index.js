import React from "react";
import ReactDom from "react-dom/client";

import "./index.css";

const socialMedia = [
  {
    icon: "fa-facebook",
    href: "https://www.facebook.com/idris16haidir/",
  },
  {
    icon: "fa-instagram",
    href: "https://www.instagram.com/idris_haidir/",
  },
  {
    icon: "fa-twitter",
    href: "https://x.com/SendalnyaLuffi",
  },
  {
    icon: "fa-linkedin",
    href: "https://www.linkedin.com/in/idris-haidir-ali-724a60296/",
  },
  {
    icon: "fa-github",
    href: "https://github.com/idrishaidir",
  },
];

const highlight = [
  {
    icon: "📖 Sertifikasi",
    href: "https://drive.google.com/drive/folders/1dMS-5L6out_D_2Wrlvkf_f04zHU1cTKf?usp=drive_link",
  },
  {
    icon: "🎓 Kampus",
    href: "https://www.bsi.ac.id/ubsi/index.js",
  },
  {
    icon: "🏆Kejuaraan",
    href: "",
  },
];

function SocialButtons({ icon, link }) {
  return (
    <button onClick={() => window.open(link, "_blank")}>
      <i className={`fa ${icon}`}></i>
    </button>
  );
}

function Header() {
  const middleIndex = Math.floor(socialMedia.length / 2);
  const socialLeft = socialMedia.slice(0, middleIndex);
  const socialRight = socialMedia.slice(middleIndex);
  return (
    <>
      <div className="social-buttons">
        {socialLeft.map((data, index) => (
          <SocialButtons icon={data.icon} link={data.href} key={index} />
        ))}
      </div>
      <div className="social-buttons right">
        {socialRight.map((data, index) => (
          <SocialButtons icon={data.icon} link={data.href} key={index} />
        ))}
      </div>
    </>
  );
}
function Identity() {
  return (
    <div className="text">
      <div className="name-wrapper">
        <div className="name">
          <b>IDRIS HAIDIR ALI</b>
        </div>
      </div>
      <div className="title">Web Proggraming</div>
    </div>
  );
}

function Biodata() {
  return (
    <div className="desc">
      <p>
        Halo, saat ini saya sedang menempuh Pendidikan Sarjana, saya memiliki
        minat dibidang Web Developer
      </p>
      <p>
        Halaman ini dibuat pada saat saya sedang belajar REACT di Codepolitan.
      </p>
    </div>
  );
}

function Badge({ icon, link }) {
  return (
    <button onClick={() => window.open(link, "_blank")}>
      <div className="height">{icon}</div>
    </button>
  );
}

function Highlight() {
  const indexHightlight = Math.floor(highlight.length);
  const fullHighlight = highlight.slice(0, indexHightlight);
  return (
    <div className="buttons">
      {fullHighlight.map((data, index) => (
        <Badge icon={data.icon} link={data.href} key={index} />
      ))}
    </div>
  );
}
function App() {
  return (
    <div className="card">
      <div className="top">
        <Header />
        <Identity />
      </div>
      <div className="bottom">
        <Biodata />
        <Highlight />
      </div>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
