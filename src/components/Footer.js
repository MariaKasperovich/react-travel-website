import "./Footer.css";
import { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";

const iconsData = [
  {
    classLink: "social-icon-link facebook",
    classIcon: "fab fa-facebook-f",
    path: "/",
    target: "_blank",
    ariaLabel: "Facebook",
  },
  {
    classLink: "social-icon-link instagram",
    classIcon: "fab fa-instagram",
    path: "/",
    target: "_blank",
    ariaLabel: "Instagram",
  },
  {
    classLink: "social-icon-link youtube",
    classIcon: "fab fa-youtube",
    path: "/",
    target: "_blank",
    ariaLabel: "Youtube",
  },
  {
    classLink: "social-icon-link twitter",
    classIcon: "fab fa-twitter",
    path: "/",
    target: "_blank",
    ariaLabel: "Twitter",
  },
];

function Footer() {
  const [email, setEmail] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email can't be empty");
  const [emailValid, setEmailValid] = useState(false);

  // Ивент blur срабатывает когда пользователь покинул поле ввода
  function blurHandler(e) {
    // event.target содержит элемент, на котором сработало событие
    if (e.target.name == "email") {
      setEmailDirty(true);
    }
  }

  function emailHandler(e) {
    setEmail(e.target.value);

    if (!validateEmail(email)) {
      setEmailError("Invalid email");
    } else {
      setEmailError("");
    }
  }

  // Валидация email
  const validateEmail = (emailValue) => {
    return String(emailValue)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function handleSubscribe() {
    if (emailValid) {
      setEmail("");
    }
  }

  useEffect(() => {
    if (emailError) {
      setEmailValid(false);
    } else {
      setEmailValid(true);
    }
  }, [email]);

  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            {emailDirty && emailError && <div>{emailError}</div>}
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
              value={email}
              onBlur={blurHandler}
              onChange={emailHandler}
            />
            <button
              type="button"
              className="btn btn--outline btn--medium"
              onClick={handleSubscribe}
              disabled={!emailValid}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>

      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              TRVL
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">TRVL © 2020</small>
          <div class="social-icons">
            {iconsData.map((icon) => {
              const { classLink, classIcon, path, target, ariaLabel } = icon;
              return (
                <Link
                  class={classLink}
                  to={path}
                  target={target}
                  aria-label={ariaLabel}
                >
                  <i class={classIcon} />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
