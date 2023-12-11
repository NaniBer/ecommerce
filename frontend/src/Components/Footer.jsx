//This component view the footer with the contact info
const Footer = () => {
  return (
    <div className="flex justify-evenly pl-24 pr-24 mb-10 bg-pageBlue text-white">
      <div>
        <p className="text-left text-lg">LOGO</p>
        <div className="flex mt-16 space-x-6">
          {/* <img src={require("../Assets/facebook.png")} className="h-16" />
          <img src={require("../Assets/instagram.png")} className="h-16" />
          <img src={require("../Assets/whatsapp.png")} className="h-16" /> */}
        </div>
      </div>
      <div className="lg:block hidden">
        <p className="lg:text-left text-center mt-5 lg:mt-0 text-sm lg:text-base">
          Quick Links
        </p>
        <span className="flex flex-col lg:mt-5 lg:text-left text-center text-sm lg:text-base">
          <a
            href="/#home"
            className="cursor-pointer hover:underline hover:underline-offset-4"
          >
            Home
          </a>
          <a
            href="/details"
            className="cursor-pointer hover:underline hover:underline-offset-4"
          >
            About
          </a>
          <a
            href="/portfolio"
            className="cursor-pointer hover:underline hover:underline-offset-4 "
          >
            Portfolio
          </a>
          <a
            href="/ourteam"
            className="cursor-pointer hover:underline hover:underline-offset-4"
          >
            Our Teams
          </a>
          <a>Services</a>
          <a
            href="/ourteam"
            className="cursor-pointer hover:underline hover:underline-offset-4 "
          >
            Our team
          </a>
        </span>
      </div>
      <div>
        <p>Contact us</p>
        <p>+251911223344</p>
        <p>someone@gmail.com</p>
      </div>
    </div>
  );
};
export default Footer;
