import React from "react";
const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-center text-white">
        <div>
          <section className="mb-2"></section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <a className="text-white" href="https://mdbootstrap.com/">
            © 2023 Copyright: LMS.com
          </a>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
