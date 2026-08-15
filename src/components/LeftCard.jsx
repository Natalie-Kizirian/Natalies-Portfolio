import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function LeftCard({ activeTab, setActiveTab }) {
  return (
    <div
      className="mt-10 flex w-full flex-col overflow-hidden bg-cover bg-no-repeat pt-70 shadow-[-6px_-6px_2px_4px_color-mix(in_srgb,var(--color-secondary)_20%,transparent)] drop-shadow-2xl sm:mt-3 md:h-150 lg:w-7/12"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/9f/51/26/9f51261d77b50a4fafb8d14a961e9814.jpg')",
      }}
    >
      {/* Profile info */}
      <div className="bg-bg-dark relative flex flex-1 flex-col items-center rounded-t-2xl px-6 pb-8 shadow-[-6px_-8px_10px_4px_color-mix(in_srgb,var(--color-black)_40%,transparent)]">
        <div className="-mt-16 mb-4 md:-mt-20">
          <img
            src="https://avatars.githubusercontent.com/u/200575349?s=400&u=8e99838859cf4ca384395d984593d030054e36ec&v=4"
            alt="Natalie Kizirian"
            className="h-28 w-28 rounded-full border border-[#3a3a42] bg-white object-cover shadow-[-6px_6px_0_0_var(--color-secondary-dark)] md:h-36 md:w-36"
          />
        </div>
        <div className="flex flex-col gap-4 items-center">
          {/* User Info */}
          <div className="text-center text-white">
            <h3 className="text-xl font-bold tracking-wide lg:text-2xl">
              Natalie Kizirian
            </h3>
            <p className=" text-sm font-medium text-gray-400">
              Front-end Developer
            </p>
          </div>
          {/* Availability */}
          <div className=" inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            Available for entry-level roles worldwide
          </div>
          {/* Social media  */}
          <div className="text-off-white flex w-1/2 justify-evenly pt-4 text-xl">
            <a
              href="https://github.com/Natalie-Kizirian"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/natalie-kizirian-867706355/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="border-brand-gradient bg-bg-dark flex items-center border-t text-white">
        <button
          onClick={() => setActiveTab("contact")}
          className="button-primary"
        >
          <span>Contact Me</span>
        </button>
      </div>
    </div>
  );
}

export default LeftCard;
