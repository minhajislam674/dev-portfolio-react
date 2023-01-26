

import LineGradient from "./gradient-line";

export const Footer = () => {

  return (
    <>
    <LineGradient/>
    <footer className="h-36 bg-light pt-5">
      <div className="w-10/12 mx-auto">
        <div className="md:flex justify-center md:justify-between pt-5">
          <p className="font-montserrat text-sm text-white md:justify-end text-left">
            <span className="font-bold text-lg"> ©2022. Minhaj Islam</span>
            <br></br>
            Built and designed with 💙 by Minhaj Islam
          </p>
          
          
          <div className="text-md flex flex-row gap-3">
            <p>Let's get in touch.</p>
            <a className=" underline  hover:text-blue-light"
              href="https://www.linkedin.com/in/minhajislam/"
            >
              LinkedIn
            </a>
            <a className=" underline  hover:text-blue-light"
              href="https://github.com/minhajislam674/"
            >
              GitHub
            </a>
            <a className=" underline  hover:text-blue-light"
              href="https://www.instagram.com/minhajtakim/"
            >
              Instagram
            </a>
          </div>

        </div>
      </div>
    </footer>
    </>
  );
};
