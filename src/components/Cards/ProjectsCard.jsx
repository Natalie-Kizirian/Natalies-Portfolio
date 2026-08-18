import nailsMobile from "../../assets/tales-of-nails-mobile.png";
import nailsDesktop from "../../assets/tales-of-nails-desktop.png";
import clientTracker1 from "../../assets/client-tracker-1.png";
import clientTracker2 from "../../assets/client-tracker-2.png";
import clientTracker3 from "../../assets/client-tracker-3.png";
import { FaReact, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

function ProjectsCard() {
  const websiteProjects = [
    {
      title: "Nail Salon Website",
      description:
        "Designed and deployed a modern, mobile-first business website for a nail salon, featuring a clear service menu and fully responsive navigation.",
      images: [
        { src: nailsDesktop, alt: "Desktop view", width: "w-2/3" },
        { src: nailsMobile, alt: "Mobile view", width: "w-1/3" },
      ],
      liveUrl: "https://grtalesofnails.netlify.app/",

      techStack: [
        { name: "React", Icon: FaReact },
        { name: "Tailwind CSS", Icon: RiTailwindCssFill },
      ],
      githubUrl: "https://github.com/Natalie-Kizirian/Tales-of-Nails-React",
    },
    {
      title: "Client Tracker App",
      description:
        "A client management app for service businesses. It stores data locally in the browser to track appointments and revenue, providing a clean dashboard for daily organization.",
      images: [
          { src: clientTracker2, alt: "client tracker project", width: "w-1/3" },
        { src: clientTracker1, alt: "client tracker project", width: "w-1/3" },
        { src: clientTracker3, alt: "client tracker project", width: "w-1/3" },
      ],
      liveUrl: "https://clienttrackerapp.netlify.app/",
      techStack: [
        { name: "React", Icon: FaReact },
        { name: "Tailwind CSS", Icon: RiTailwindCssFill },
      ],
      githubUrl: "https://github.com/Natalie-Kizirian/Client-Tracker",
    },
  ];

  return (
    <div className="flex flex-col gap-9">
      {websiteProjects.map(
        ({ title, description, images, liveUrl, techStack, githubUrl }) => (
          <div
            key={title}
            className="border-gray-border bg-surface flex flex-col gap-4 rounded-xl border p-3"
          >
            <div className="flex flex-col justify-between md:flex-row md:items-center">
              <h3 className="text-title text-lg font-semibold">{title}</h3>

              <div className="flex justify-between md:w-1/6">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={liveUrl}
                  className="text-primary hover:text-primary-hover underline underline-offset-4 transition-colors duration-300"
                >
                  Live url
                </a>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="hover:text-primary-hover text-2xl transition-colors duration-300" />
                </a>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex gap-4">
              {techStack.map(({ name, Icon }) => (
                <div
                  key={name}
                  className="bg-gray-border flex items-center gap-1 rounded-xl p-2"
                >
                  <Icon className="text-[#00D8FF]" />
                  <p>{name}</p>
                </div>
              ))}
            </div>

            <p className="text-body leading-relaxed">{description}</p>

            {/* Images */}
            <div className="flex w-full justify-center gap-2 overflow-hidden">
              {images.map(({ src, alt, width }) => (
                <img
                  src={src}
                  alt={alt}
                  key={src}
                  className={`h-60 rounded-lg object-cover object-top md:h-100 ${width} `}
                />
              ))}
            </div>
          </div>
        ),
      )}
    </div>
  );
}
export default ProjectsCard;

/*  */
