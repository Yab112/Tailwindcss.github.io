import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start flex-wrap gap-20 max-lg:flex-col ">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={footerLogo}
              alt="nikeloggo"
              wifth={80}
              height={12}
              className="mt-3 "
            />
          </a>
          <p className="text-base text-white-400 sm:max-w-sm mt-10 font-montserrat">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>

          <div className="flex gap-5 mt-8 items-center">
            {socialMedia.map((media) => (
              <div
                className="flex justify-center items-center w-12 h-12 rounded-full bg-white-400 cursor-pointer"
                key={media.alt} 
              >
                <img src={media.src} alt={media.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
                {footerLinks.map((link) => (
                  <div className="flex flex-col gap-2 mt-6" key={link.title}>
                    <h3 className="text-white text-xl font-semibold">
                      {link.title}
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {link.links.map((link) => (
                        <li
                          className="text-white-400 font-montserrat text-sm hover:text-coral-red cursor-pointer"
                          key={link.name}
                        >
                          {link.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
        </div>
      </div>
      <p className="text-gray-400 text-sm font-montserrat text-center ml-[300px] mt-5">
                Copyright © 2024 Nikeshoe  .
              </p>
    </footer>
  );
};

export default Footer;
