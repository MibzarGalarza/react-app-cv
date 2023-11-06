/* eslint-disable jsx-a11y/anchor-is-valid */
import { useAuth } from "../context/AuthContext";
import myImage from '../img/me.jpg';
import myProfile from '../img/profile.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';



export function Home() {
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  function toggleDropdown() {
    var dropdown = document.getElementById("profileDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  }



  // Cierra el menú si se hace clic fuera de él
  document.addEventListener("click", function (event) {
    const dropdown = document.getElementById("profileDropdown");
    const dropdownButton = document.querySelector(".img--perfil"); // Reemplaza con el selector correcto de tu botón de perfil

    // Verifica si se hizo clic fuera del menú o en el botón de perfil
    if (!dropdown.contains(event.target) && event.target !== dropdownButton) {
      dropdown.style.display = "none"; // Cierra el menú
    }
  });




  // Verifica si el usuario ha iniciado sesión con Google y si tiene una foto de perfil
  const userPhotoURL = user.photoURL;



  return (

    <div >

      <header class="header" id="header">
        <nav class="nav container">
          <a href="/" class="nav__logo">Mibzar</a>

          <div class="nav__menu" id="nav-menu">
            <ul class="nav__list grid">
              <li class="nav__item">
                <a href="/" class="nav__link active-link">
                  <i class="uil uil-estate nav__icon"></i>Home
                </a>
              </li>
              <li class="nav__item">
                <a href="#about" class="nav__link">
                  <i class="uil uil-user nav__icon"></i> About
                </a>
              </li>
              <li class="nav__item">
                <a href="#skills" class="nav__link">
                  <i class="uil uil-file nav__icon"></i>Skills
                </a>
              </li>
              <li class="nav__item">
                <a href="#services" class="nav__link">
                  <i class="uil uil-briefcase-alt nav__icon"></i> Services
                </a>
              </li>
              <li class="nav__item">
                <a href="#portfolio" class="nav__link">
                  <i class="uil uil-scenery nav__icon"></i>Portafolio
                </a>
              </li>
              <li class="nav__item">
                <a href="/api" class="nav__link">
                  <i class="uil uil-message nav__icon"></i>My Blog

                </a>
              </li>

              <li class="nav__item">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <div className="flex items-center justify-center">
                    <img
                      src={userPhotoURL || myProfile} // Cambia '/default-profile-image.jpg' al URL de tu imagen por defecto
                      alt="Profile"
                      className="w-16 h-16 rounded-full mb-4 img--perfil"
                      onClick={toggleDropdown}
                    />
                  </div>

                  <ul className="dropdown-menu text-small" id="profileDropdown">
                    <button onClick={toggleDropdown} className="close-button">X</button>
                    <img
                      src={userPhotoURL || myProfile}
                      alt="Profile"
                      className="w-16 h-16 rounded-full mb-4 img--perfil-user"
                    />
                    <li className="liuser">
                      <span className="dropdown-item" id="displayName">
                        <p className="text-xl mb-4 home__subtitle_user">Welcome, {user.displayName || user.email}</p>
                      </span>

                      <div>
                        <button
                          className="bg-slate-200 hover:bg-slate-300 rounded home__subtitle_user liuser py-2 px-4 text-black"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </div>
                    </li>

                  </ul>
                </div>

              </li>










            </ul>
            <i class="uil uil-times nav__close" id="nav-close"></i>
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
              <h3 class="home__subtitle">Front-end Developer</h3>
              <p class="home__description">20 years old Software Engineering Student</p>
              <a href="#Contact" class="button button--flex">
                Contact Me<i class="uil uil-message button__icon"></i>
              </a>
            </div>
          </div>

        </div>


      </section>
    </div>
  );
}