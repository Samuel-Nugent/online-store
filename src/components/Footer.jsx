const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left">
        <div className="w-full md:w-2/4 mb-8 md:mb-0">
          <p className="text-gray-400 mt-4 max-w-md mx-auto md:mx-0">
            Disclaimer: This website is a demo project for educational purposes
            only. It is not affiliated with, endorsed by, or sponsored by any of
            the brands, companies, or products displayed. All trademarks and
            logos are the property of their respective owners.
            <br />
            Emoji graphics used in favicon sourced from the{" "}
            <a
              href="https://github.com/twitter/twemoji"
              className=" text-amber-300 hover:text-orange-500 transition cursor-pointer"
            >
              Twemoji project
            </a>
            , © 2020 Twitter, Inc. and other contributors. Twemoji is licensed
            under{" "}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              className="text-amber-300 hover:text-orange-500 transition cursor-pointer"
            >
              CC-BY 4.0
            </a>
            .
          </p>
        </div>

        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">
            Find out more...
          </h3>
          <ul className="flex flex-col gap-4 text-gray-400">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact us
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-white">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        © 2025 Online Tech Store (Demo Project). All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
