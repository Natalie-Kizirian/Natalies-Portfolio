import {
  LuSend,
  LuCopy,
  LuCheck,
  LuMail,
  LuX,
  LuCircleCheck,
} from "react-icons/lu";
import { useForm } from "@formspree/react";
import { useState, useEffect } from "react";
function ContactCard() {
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
      <div className="border-gray-border bg-surface space-y-3 rounded-xl border p-8 text-center">
        <LuCircleCheck className="mx-auto text-4xl text-green-400" />
        <h3 className="text-lg font-bold">Thank you!</h3>
        <p className="text-body text-sm">
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
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">Let's Connect!</h2>
        <p className="text-body text-sm leading-relaxed">
          If you have any questions, feedback about my projects, or an
          opportunity to discuss, feel free to reach out.
        </p>
      </div>
      <div>
        {/* MAIL */}
        <div className="space-y-2 rounded-xl">
          <span className="text-body flex items-center gap-1.5 text-xs font-semibold uppercase">
            <LuMail /> Direct Email
          </span>
          <div className="border-gray-border flex items-center justify-between gap-2 rounded-lg border bg-black p-2.5">
            <span className="truncate font-mono text-xs">{myEmail}</span>
            <button
              onClick={handleCopy}
              className="bg-gray-border hover:bg-gray-border/60 flex cursor-pointer items-center gap-1 rounded px-3 py-1.5 text-xs transition-colors"
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
        noValidate
        key={state.succeeded}
        onSubmit={handleSubmit}
        className="border-gray-border space-y-4 rounded-xl border p-4 shadow-xl lg:mx-15"
      >
        <div>
          <label className="text-body mb-1 block text-xs font-medium md:text-sm">
            NAME
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="focus:border-primary border-gray-border bg-surface w-full rounded-lg border px-3 py-2 text-xs focus:outline-none md:text-sm"
          />
        </div>

        <div>
          <label className="text-body mb-1 block text-xs font-medium md:text-sm">
            EMAIL
          </label>
          <input
            type="email"
            name="email" // Formspree
            required
            placeholder="your@email.com"
            className="focus:border-primary border-gray-border bg-surface w-full rounded-lg border px-3 py-2 text-xs focus:outline-none md:text-sm"
          />
        </div>

        <div>
          <label className="text-body mb-1 block text-xs font-medium md:text-sm">
            MESSAGE
          </label>
          <textarea
            name="message" // Formspree
            required
            rows={5}
            placeholder="Write your message..."
            className="focus:border-primary border-gray-border bg-surface w-full resize-none rounded-lg border px-3 py-2 text-xs focus:outline-none md:text-sm"
          />
        </div>

        <button
          type="submit"
          className="text-primary border-primary hover:bg-primary/10 lg: flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border bg-black p-2 text-xs font-extrabold"
        >
          {state.submitting ? "Sending..." : "Send Message"} <LuSend />
        </button>
      </form>
    </div>
  );
}
export default ContactCard;
