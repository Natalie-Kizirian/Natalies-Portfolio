import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function MainCard() {
  return (
    <div
      className="mt-10 flex w-full flex-col overflow-hidden bg-cover bg-no-repeat pt-70 shadow-[-6px_-6px_2px_4px_color-mix(in_srgb,var(--color-secondary)_20%,transparent)] drop-shadow-2xl sm:mt-3 md:h-150 lg:w-7/12"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/9f/51/26/9f51261d77b50a4fafb8d14a961e9814.jpg')",
      }}
    >
      {/* Profile info */}
      <div className="bg-bg-dark relative flex flex-1 flex-col items-center px-6 pb-8">
        <div className="-mt-16 mb-4 md:-mt-20">
          <img
            src="#"
            alt="Natalie Kizirian"
            className="h-28 w-28 rounded-full border border-[#3a3a42] bg-white object-cover shadow-[-6px_6px_0_0_var(--color-secondary-dark)] md:h-36 md:w-36"
          />
        </div>

        {/* User Info */}
        <div className="text-center text-white">
          <h3 className="text-xl font-bold tracking-wide lg:text-2xl">
            Natalie Kizirian
          </h3>
          <p className="mt-1 text-sm font-medium text-gray-400">
            Front-end Developer
          </p>
        </div>
        {/* Social media  */}
        <div className="text-off-white flex w-1/2 justify-evenly pt-4 text-xl">
          <a href="">
            <FaGithub />
          </a>
          <a href="">
            <FaInstagram />
          </a>
          <a href="">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="border-brand-gradient bg-bg-dark flex items-center justify-around border-t text-white">
        <button className="button-primary">
          <span>Download CV</span>
        </button>
        <button className="button-primary">
          <span>Contact Me</span>
        </button>
      </div>
    </div>
  );
}

export default MainCard;
