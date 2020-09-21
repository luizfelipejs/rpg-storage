import React from "react";
import Header from "../../components/header";
import landingJPEG from '../../assets/images/landing.jpg'

import "./styles.css";

function Landing() {
  return (
    <div className="landing-page">
      <Header />
      <h1 className="wellcome-message">Bem vindo</h1>
      <div className="text-landing">
        <p>
          Bem vindo a nossa plataforma aqui você pode criar suas aventuras de
          rpg de maneira organizada eficiente e produtiva, explore nossa
          plataforma e de seu feedback
        </p>
        <p>O app esta em desenvolvimento qualquer problema contate-nos, se você tem alguma ideia envie um email</p>
      </div>
      <figure className="landing-image">
          <img src={landingJPEG} alt="rpg"/>
      </figure>
        <footer className="footer-landing">
            <p>Entre em contato pelo email: luizfelipejs.svp@gmail.com</p>
        </footer>
    </div>
  );
}

export default Landing;
