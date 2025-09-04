import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { useLocation } from "react-router-dom";

const SERVICE_ID = "service_j6y4jit";
const TEMPLATE_ID = "template_nab2nce";
const PUBLIC_KEY = "mXkVle5vyG6Uy8cOL";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
        phone: "", 
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Send using the same field names you already use.
      // Make sure your EmailJS template has variables: {{name}}, {{email}}, {{subject}}, {{message}}
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          phone: form.phone,  
          subject: form.subject,
          message: form.message,
        },
        { publicKey: PUBLIC_KEY }
      );

      setSent(true);
      setForm({ name: "", email: "",phone: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 3000);
    } catch (err) {
      setError("Could not send your message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   const stateSubject = location.state?.subject;
  //   if (stateSubject) {
  //     setForm((prev) => ({ ...prev, subject: stateSubject }));
  //   }
  // }, [location.state]);

  useEffect(() => {
    const s = location.state?.subject;
    if (s) setForm((prev) => ({ ...prev, subject: s }));
  }, [location.state]);

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Get in touch
          </h1>
          <p className="mt-3 text-gray-500">
            Planning Europe? Tell us about your trip, or ask anything—our team
            replies fast.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* Contact info */}
          <aside className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-extrabold text-gray-900">
              Contact details
            </h2>
            <p className="mt-2 text-gray-600">
              Prefer email or a quick call? We’re here Monday–Saturday.
            </p>

            <div className="mt-6 space-y-4 text-[15px]">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-md bg-yellow-100 text-yellow-700">
                  {/* location icon */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M12 2a8 8 0 00-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 00-8-8zm0 11a3 3 0 113-3 3 3 0 01-3 3z" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-gray-900">Office</p>
                  <p className="text-gray-600">
                    21 Rue de Rivoli, 75001 Paris, France
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-md bg-yellow-100 text-yellow-700">
                  {/* phone icon */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M6.6 10.8a15.6 15.6 0 006.6 6.6l2.2-2.2a1 1 0 011.1-.2 11.7 11.7 0 003.8.6 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h2.4a1 1 0 011 1 11.7 11.7 0 00.6 3.8 1 1 0 01-.2 1.1l-2.2 2.2z" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-600">+33 1 23 45 67 89</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-md bg-yellow-100 text-yellow-700">
                  {/* mail icon */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M20 4H4a2 2 0 00-2 2v1l10 6 10-6V6a2 2 0 00-2-2zm0 6.2l-8.7 5.2a1 1 0 01-1 0L4 10.2V18a2 2 0 002 2h12a2 2 0 002-2v-7.8z" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">hello@euro-travel.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-md bg-yellow-100 text-yellow-700">
                  {/* clock icon */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm1 11h-4V7h2v4h2z" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-gray-900">Hours</p>
                  <p className="text-gray-600">Mon–Sat: 9:00–18:00 CET</p>
                </div>
              </div>
            </div>

            {/* Map preview */}
            <div className="mt-8 rounded-xl overflow-hidden border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1400&auto=format&fit=crop"
                alt="Office area"
                className="h-48 w-full object-cover"
              />
            </div>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-5 text-gray-500">
              <a href="#" aria-label="Facebook" className="hover:text-gray-900">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.01 3.66 9.16 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34v7.03C18.34 21.22 22 17.07 22 12.06z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-gray-900">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M18.244 2H21l-6.32 7.22L22 22h-6.59l-5.16-6.77L3.9 22H2l6.78-7.75L2 2h6.66l4.65 6.16L18.24 2Zm-2.31 18h2.06L8.16 4H6.02l9.91 16Z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-gray-900"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5.5A4.5 4.5 0 1016.5 12 4.5 4.5 0 0012 7.5zM18 6.5a1.5 1.5 0 10-1.5 1.5A1.5 1.5 0 0018 6.5z" />
                </svg>
              </a>
            </div>
          </aside>

          {/* Form */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-extrabold text-gray-900">
              Send us a message
            </h2>
            <p className="mt-2 text-gray-600">
              Fill out the form and we’ll get back within 24 hours (usually
              sooner).
            </p>

            {sent && (
              <div className="mt-4 rounded-md bg-green-50 p-3 text-green-700 text-sm border border-green-200">
                Thanks! Your message has been sent. We’ll be in touch shortly.
              </div>
            )}
            {error && (
              <div className="mt-4 rounded-md bg-red-50 p-3 text-red-700 text-sm border border-red-200">
                {error}
              </div>
            )}

            <form onSubmit={onSubmit} className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    required
                    placeholder="Your full name"
                    className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900/10"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    required
                    placeholder="you@example.com"
                    className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900/10"
                  />
                </div>
              </div>

              {/* 👇 new Phone field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-semibold text-gray-600"
                >
                  Mobile Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={onChange}
                  required
                  placeholder="+33 6 12 34 56 78"
                  className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900/10"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-semibold text-gray-600"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={onChange}
                  placeholder="How can we help?"
                  className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900/10"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={form.message}
                  onChange={onChange}
                  required
                  placeholder="Tell us about your trip, dates, budget, and questions."
                  className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900/10"
                />
              </div>

              <div className="flex items-center justify-between gap-3">
                <p className="text-xs text-gray-500">
                  By submitting, you agree to our{" "}
                  <a href="#" className="underline">
                    Terms
                  </a>{" "}
                  and{" "}
                  <a href="#" className="underline">
                    Privacy Policy
                  </a>
                  .
                </p>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-6 py-2.5 font-semibold text-black hover:bg-yellow-400 transition disabled:opacity-60"
                >
                  {loading ? "Sending…" : "Send message"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-2xl bg-gray-900 p-8 sm:p-10 lg:p-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-white">
            <h4 className="text-2xl font-extrabold">
              Want a custom itinerary?
            </h4>
            <p className="mt-1 text-white/70">
              We’ll plan routes, stays, and experiences tailored to your dates
              and budget.
            </p>
          </div>
          <a
            href="/packages"
            className="rounded-md bg-yellow-500 px-6 py-3 font-semibold text-black hover:bg-yellow-400 transition"
          >
            Explore Packages
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
