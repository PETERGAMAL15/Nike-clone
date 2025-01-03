import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div
        className="flex justify-between
      items-start gap-20 flex-wrap max-lg:flex-col">
        <Header />
        <Links />
      </div>
      <CopyRights />
    </footer>
  );
};

function Header() {
  return (
    <div className="flex flex-col items-start ">
      <a href="/">
        <img src={footerLogo} width={150} height={40} />
      </a>
      <p
        className="mt-6 text-base leading-7 font-montserrat
  text-white-400 sm:max-w-sm ">
        Get shoes ready for the new term at your nearest Nike store. Find Your
        perfect Size In Store. Get Rewards
      </p>
      <SocialLinks />
    </div>
  );
}
function SocialLinks() {
  return (
    <div className="flex items-center gap-5 mt-8">
      {socialMedia.map((icon) => (
        <div
          className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
          key={icon.alt}>
          <img src={icon.src} alt={icon.alt} width={24} height={24} />
        </div>
      ))}
    </div>
  );
}

function Links() {
  return (
    <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
      {footerLinks.map((section) => (
        <div key={section}>
          <h4
            className="text-white
      font-montserrat text-2xl leading-normal font-medium mb-6">
            {section.title}
          </h4>
          <HelpLinks section={section}/>
        </div>
      ))}
    </div>
  );
}
function HelpLinks({ section }) {
  return (
    <ul>
      {section.links.map((link) => (
        <li
          className="mt-3 text-white-400 font-montserrat text-base leading-normal
hover:text-slate-gray cursor-pointer"
          key={link.name}>
          {link.name}
        </li>
      ))}
    </ul>
  );
}

function CopyRights() {
  return (
    <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
      <div
        className="flex flex-1 
  justify-start items-center font-montserrat cursor-pointer">
        <img
          className="rounded-full m-2"
          src={copyrightSign}
          alt="copy right sign"
          width={20}
          height={20}
        />
        <p>copyright. All rights reserved.</p>
      </div>
      <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
    </div>
  );
}

export default Footer;
