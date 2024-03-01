import React from "react";

const links = ["Privacy Policy", "Terms and Conditions", "Accesibility Statement", "Contact"];

function Footer() {
  return (
    <div className="flex flex-row gap-14 justify-center px-2 py-8">
      <div className="text-white font-bold font-sf-med text-sm">&copy; IGospel Songs</div>
      <div className="flex flex-row items-center gap-5">
        {links.map((item) => (
          <a href="/" key={item} className="text-white font-sf-reg text-sm">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Footer;
