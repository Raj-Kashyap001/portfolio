import "./Contact.css";

const Contact = () => {
  return (
    <section id="Contact" className="contact">
      <h2 className="section-title">Contact</h2>

      <div className="wrapper">
        <div className="img-wrapper">
          <img
            src="/portfolio/icons/mail.svg"
            alt=""
            className="contact-form-img"
          />
          <p className="description"></p>
          Feel free to reach out to me using the form below. I'll get back to
          you as soon as possible!
        </div>
        <form className="contact-form" method="POST">
          <input type="text" id="name" placeholder="Name" required />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            id="message"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <button className="btn" type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
