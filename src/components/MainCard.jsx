function MainCard() {
  return (
    <div className="m-3 -mt-4 pt-55 flex w-full flex-col overflow-hidden rounded-xs bg-[#2525cb] shadow-[-6px_-6px_2px_4px_color-mix(in_srgb,var(--color-primary)_40%,transparent)] drop-shadow-2xl sm:mt-3 md:h-150 lg:w-7/12">
     
      {/* 1. Header Background / Cover */}
      {/* <div className=" h-64 w-full bg-red-500" /> */}

      {/* 2. Main Body (Profile info) */}
      <div className="bg-bg-dark  relative flex flex-1 flex-col items-center px-6 pb-8 ">
        {/* Avatar: Αρνητικό margin για να καπνίσει/πατήσει ανάμεσα στα 2 φόντα */}
        <div className="-mt-16 mb-4 md:-mt-20">
          <img
            src="https://via.placeholder.com/150"
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
      </div>

      {/* 3. Action Footer */}
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
