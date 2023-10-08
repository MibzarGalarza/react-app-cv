/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Alert } from "./Alert";
import myImage from '../img/me.jpg';
import imageGoogle from '../img/google.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Write an email to reset password");
    try {
      await resetPassword(user.email);
      setError('We sent you an email. Check your inbox')
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto">



      <header class="header" id="header">
        <nav class="nav container">
          <a href="#" class="nav__logo">Mibzar</a>

          <div class="nav__menu" id="nav-menu">
           
          </div>
          <div class="nav__btns">
            <div class="nav__toggle" id="nav-toggle">
              <i class="uil uil-apps"></i>
            </div>
          </div>



        </nav>

      </header>


      <section class="home section" id="home">
        <div class="home__container container grid">
          <div class="home__content grid">
            <div class="home__social">
            <a href="https://www.linkedin.com/in/mibzar-galarza-659542233/" target="_blank" className="home__social-icon" rel="noreferrer">
                <FaLinkedin className="uil" /> {/* Aquí puedes agregar clases personalizadas */}
              </a>

              <a href="https://github.com/M1bzar" target="_blank" className="home__social-icon" rel="noreferrer">
                <FaGithub className="uil" /> {/* Aquí puedes agregar clases personalizadas */}
              </a>
            </div>
            <div class="home__img">
              <svg class="home__blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#1D6C70" d="M71.6,-21.2C79.8,2,64.5,34.9,43,47.8C21.6,60.8,-6.2,53.7,-25.6,38.8C-45.1,23.8,-56.2,1,-50.6,-18.7C-44.9,-38.4,-22.5,-54.9,4.6,-56.4C31.7,-57.9,63.4,-44.4,71.6,-21.2Z" transform="translate(100 100)" />

              </svg>
              <img src={myImage} className="home__blob-img" alt="" />
            </div>
            <div class="home__data">

            <h1 class="home__tittle">Hi, My name is Mibzar</h1>
            <h3 class="home__subtitle">Welcome yo my page, plis long in</h3>
        


              {error && <Alert message={error} />}

              <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              >
                <div className="mb-4 ">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2 home__subtitle"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 contact__input px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="youremail@company.tld"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 text-sm font-bold mb-2 home__subtitle"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 contact__input  home__subtitle text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="*************"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700  home__subtitle button buttonsingin button--flex sing-in text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Long In
                  </button>
                  <a
                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 home__description"
                    href="#!"
                    onClick={handleResetPassword}
                  >
                    Forgot Password?
                  </a>
                </div>
              </form>
              <button
                onClick={handleGoogleSignin}
                className="bg-slate-50 hover:bg-slate-200 text-black buttongoogle   shadow rounded border-2 border-gray-300 py-2 px-4 w-full home__subtitle"
              >
                <div className="logGoogle"><img src={imageGoogle} className="home__google" alt="" /></div>
                <p className="googleP">Google Account</p>
                
              </button>
             

              <p className="my-4 text-sm flex justify-between px-3 home__description">
                Don't have an account?
                <Link to="/register" className="text-blue-700 hover:text-blue-900 register home__description">
                  Register
                </Link>
              </p>
              

            </div>
          </div>

        </div>


      </section>

    </div>
  );
}
