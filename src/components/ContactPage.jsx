import {
  LuSend,
  LuCopy,
  LuCheck,
  LuMail,
  LuX,

  LuCircleCheck,
} from "react-icons/lu";
import { useForm, ValidationError } from "@formspree/react";
import { useState, useEffect } from "react";
function ContactPage() {
  const [state, handleSubmit] = useForm("mzepabpv");
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const myEmail = "natalie.kizirian@gmail.com";

  useEffect(() => {
    if (state.succeeded) {
      setShowThankYou(true);
      const timer = setTimeout(() => setShowThankYou(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  if (showThankYou) {
    return (
      <div className="space-y-3 rounded-xl border border-neutral-800 bg-neutral-900/40 p-8 text-center">
        <LuCircleCheck className="mx-auto text-4xl text-green-400" />
        <h3 className="text-lg font-bold">Thank you!</h3>
        <p className="text-xs text-gray-400">
          Your message has been sent successfully. I'll get back to you soon!
        </p>
      </div>
    );
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(myEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text", err);
      setFailed(true);
      setTimeout(() => setFailed(false), 2000);
    }
  };
  return (
    <div className="flex flex-col gap-6 p-3">
      {/* Availability */}
      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
        <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
        Available for entry-level roles worlwide
      </div>
      <div>
        <h2 className="mb-2 text-xl font-bold">Let's Connect!</h2>
        <p className="text-off-white text-sm leading-relaxed ">
          If you have any questions, feedback about my projects, or an
          opportunity to discuss, feel free to reach out.
        </p>
      </div>
      <div>
        {/* MAIL */}
        <div className="space-y-2 rounded-xl">
          <span className="text-off-white flex items-center gap-1.5 text-xs  font-semibold uppercase">
            <LuMail /> Direct Email
          </span>
          <div className="flex items-center justify-between gap-2 rounded-lg border border-neutral-700 bg-black/70 p-2.5">
            <span className="truncate font-mono text-xs ">{myEmail}</span>
            <button
              onClick={handleCopy}
              className="bg-gray-dark hover:bg-gray-dark-hover flex cursor-pointer items-center gap-1 rounded px-3 py-1.5 text-xs transition-colors"
            >
              {failed ? (
                <LuX className="text-red-400" />
              ) : copied ? (
                <LuCheck className="text-green-400" />
              ) : (
                <LuCopy />
              )}
              {failed ? "Failed" : copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>{" "}
    
      {/* Contact Form */}
      <form
        key={state.succeeded}
        onSubmit={handleSubmit}
        className="space-y-4 rounded-xl border border-gray-dark bg-black/70 p-4"
      >
        <div>
          <label className="mb-1 block text-xs font-medium text-gray-400 md:text-sm">
            NAME
          </label>
          <input
            type="text"
            name="name" // Formspree
            required
            placeholder="Your Name"
            className="focus:border-brand w-full rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-2 text-xs focus:outline-none md:text-sm"
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
            className="mt-1 text-xs text-red-400"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-gray-400 md:text-sm">
            EMAIL
          </label>
          <input
            type="email"
            name="email" // Formspree
            required
            placeholder="your@email.com"
            className="focus:border-brand w-full rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-2 text-xs focus:outline-none md:text-sm"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="mt-1 text-xs text-red-400"
          />
        </div>

        <div>
          <label className="md:text-sm font-medium mb-1 block text-xs text-gray-400">
            MESSAGE
          </label>
          <textarea
            name="message" // Formspree
            required
            rows={5}
            placeholder="Write your message..."
            className="focus:border-brand w-full resize-none rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-2 text-xs focus:outline-none md:text-sm"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="mt-1 text-xs text-red-400"
          />
        </div>

        <button
          type="submit"
          className="bg-secondary-dark flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg py-2.5 text-xs font-semibold transition-opacity hover:opacity-90"
        >
          {state.submitting ? "Sending..." : "Send Message"} <LuSend />
        </button>
      </form>
    </div>
  );
}
export default ContactPage;
