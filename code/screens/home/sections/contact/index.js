import React from "react";
import animations from "../../../../../assets/js/animations";

const Contact = ({ _body, form }) => {
  return (
    <div className="contact flex-between" id="contact">
      <div className="contact-bg"></div>
      <div className="contact-flex">
        <div
          className="contact-left"
          data-aos-anchor-placement="top-center"
          data-aos={animations.fadeRight}
        >
          {_body}
        </div>
        {form}
      </div>
    </div>
  );
};

export default Contact;