import { contactInfo } from '../data/Contactinfo';

function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon
            as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-card p-8 rounded-lg shadow-card">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-semibold mb-1">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-semibold mb-1">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block font-semibold mb-1">
                  Subject *
                </label>
                <input
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-semibold mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Your message..."
                  className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <button
                type="button"
                className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary-light transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div
                  key={idx}
                  className="bg-card p-6 rounded-lg shadow-card flex items-start space-x-4 hover:scale-[1.03] transition-transform border border-primary/15"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    {info.link !== '#' ? (
                      <a
                        href={info.link}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{info.details}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Map */}
        <div className="bg-card rounded-lg overflow-hidden shadow-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6638820364896!2d3.4207436!3d6.4281242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1234567890"
            className="w-full aspect-video"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Olayinka Furniture Palace Location"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
