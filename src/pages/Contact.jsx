function Contact() {
  return (
    <section className="contact-page">
      <div>
        <h1>Get in Touch</h1>
        <p>We are here to help. Reach out to us anytime.</p>
        <ul>
          <li>
            <b>📍 Address</b> Lalitpur, Nepal
          </li>
          <li>
            <b>☎ Phone</b> +977 980 1234567
          </li>
          <li>
            <b>✉ Email</b> hello@satwahimalayan.com
          </li>
          <li>
            <b>◷ Hours</b> Sun–Fri · 10:00 AM – 6:00 PM
          </li>
        </ul>
        <p className="socials">● &nbsp; ● &nbsp; ● &nbsp; ●</p>
      </div>
      <form>
        <input placeholder="Your Name" />
        <input placeholder="Email Address" type="email" />
        <input placeholder="Subject" />
        <textarea placeholder="Your Message" rows="5" />
        <button type="button">♧ &nbsp; Send Message</button>
      </form>
    </section>
  );
}
export default Contact;
