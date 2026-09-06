import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert("Please fill in your name, email and message.");
      return;
    }

    setSubmittedName(form.name);
    setSubmitted(true);
    setForm(initialForm);
  };

  const handleAnotherMessage = () => {
    setSubmitted(false);
    setSubmittedName("");
  };

  return (
    <main className="editorial-page contact-page">

      {/* HERO */}
      <section className="editorial-hero contact-editorial-hero">

        <div className="editorial-container">

          <p className="eyebrow">VINTAGE MOTORS · PRIVATE CONCIERGE</p>

          <h1>
            Begin your
            <br />
            <em>journey.</em>
          </h1>

          <div className="editorial-hero-bottom">

            <p>
              Tell us what automobile, service or chapter of
              automotive history brought you here.
            </p>

            <span>PRIVATE ENQUIRIES</span>

          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section className="contact-editorial-content">

        <div className="editorial-container contact-editorial-grid">

          {/* INFORMATION */}
          <div className="contact-editorial-info">

            <p className="eyebrow">GET IN TOUCH</p>

            <h2>
              For those who
              <br />
              <em>appreciate history.</em>
            </h2>

            <p className="contact-lead">
              Whether you are searching for a particular automobile,
              considering restoration or simply want to discuss
              automotive history, our concierge is here to help.
            </p>


            <div className="contact-register">

              <div>
                <span>PRIVATE SHOWROOM</span>
                <strong>By Appointment Only</strong>
              </div>

              <div>
                <span>CONCIERGE</span>
                <strong>+91 90000 00000</strong>
              </div>

              <div>
                <span>EMAIL</span>
                <strong>concierge@vintagemotors.com</strong>
              </div>

              <div>
                <span>ARCHIVE HOURS</span>
                <strong>Monday — Saturday · 10:00 — 18:00</strong>
              </div>

            </div>


            <div className="contact-estimate">
              <span>EST. 1955</span>
              <p>
                Preserving remarkable automobiles and the stories
                behind them.
              </p>
            </div>

          </div>


          {/* FORM */}
          <div className="premium-contact-form">

            {submitted ? (

              <div className="contact-success-premium">

                <span className="success-number">✓</span>

                <p className="eyebrow">MESSAGE RECEIVED</p>

                <h3>
                  Thank you,
                  <br />
                  <em>{submittedName}.</em>
                </h3>

                <p>
                  Your enquiry has reached the Vintage Motors
                  private concierge. We will be in touch shortly.
                </p>

                <button
                  type="button"
                  className="editorial-button"
                  onClick={handleAnotherMessage}
                >
                  Send Another Message →
                </button>

              </div>

            ) : (

              <form onSubmit={handleSubmit}>

                <div className="form-intro">

                  <p className="eyebrow">PRIVATE ENQUIRY</p>

                  <h3>
                    Let's talk
                    <br />
                    <em>automobiles.</em>
                  </h3>

                </div>


                <div className="premium-form-grid">

                  <div className="premium-field">
                    <label htmlFor="name">YOUR NAME *</label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                    />
                  </div>


                  <div className="premium-field">
                    <label htmlFor="email">EMAIL ADDRESS *</label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                    />
                  </div>


                  <div className="premium-field">
                    <label htmlFor="phone">PHONE</label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91"
                    />
                  </div>


                  <div className="premium-field">
                    <label htmlFor="subject">ENQUIRY TYPE</label>

                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                    >
                      <option value="">Select an option</option>
                      <option value="acquisition">
                        Automobile Acquisition
                      </option>
                      <option value="restoration">
                        Restoration
                      </option>
                      <option value="inspection">
                        Vehicle Inspection
                      </option>
                      <option value="consultation">
                        Private Consultation
                      </option>
                    </select>
                  </div>

                </div>


                <div className="premium-field full-field">

                  <label htmlFor="message">
                    YOUR MESSAGE *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="7"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about the automobile or service..."
                  />

                </div>


                <button
                  type="submit"
                  className="editorial-button"
                >
                  Send Enquiry →
                </button>

              </form>

            )}

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;