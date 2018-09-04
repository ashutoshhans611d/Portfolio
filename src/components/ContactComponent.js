import React from "react";
//import "./Contact.scss"

const Contact = () => {
  const hrStyles = {
    width: "200px",
    opacity: 0.5
  };
  return (
    <div className="padding-large content text-grey" id="contact">
      <header className="padding-top-32"> 
        <h2 className="w3-text-light-grey">Contact Me</h2>
      </header>
      <hr style={hrStyles} />
      <div className="section">
        <p>
          <i className="fa fa-map-marker fa-fw xxlarge w3-margin-right" />{" "}
          Bangalore, &nbsp;India
        </p>
        <p>
          <i className="fa fa-envelope fa-fw xxlarge w3-margin-right"> </i>{" "}
          Email: &nbsp;ashhans@deloitte.com
        </p>
      </div>
      <br />
      <p>Lets get in touch. Send me a message:</p>
      <form action="/action_page.php" target="_blank">
        <p>
          <input
            className="ash-input padding-16"
            type="text"
            placeholder="Name"
            required
            name="Name"
          />
        </p>
        <p>
          <input
            className="ash-input padding-16"
            type="text"
            placeholder="Email"
            required
            name="Email"
          />
        </p>
        <p>
          <input
            className="ash-input padding-16"
            type="text"
            placeholder="Subject"
            required
            name="Subject"
          />
        </p>
        <p>
          <input
            className="ash-input padding-16"
            type="text"
            placeholder="Message"
            required
            name="Message"
          />
        </p>
        <p>
          <button
            className="w3-button w3-light-grey padding-large"
            type="submit"
          >
            <i className="fa fa-paper-plane" /> SEND MESSAGE
          </button>
        </p>
      </form>
    </div>
  );
};

export default Contact;
