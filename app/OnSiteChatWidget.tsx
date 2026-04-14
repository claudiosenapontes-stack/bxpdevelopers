"use client";

import { useEffect, useState } from "react";

const topics = ["Investing", "Designing", "Building", "Remodeling", "Sourcing", "Staging"];

const topicCopy: Record<string, { intro: string; followUp: string; confirm: string }> = {
  Investing: {
    intro: "I need help with investing.",
    followUp: "Tell us a bit more about your investing goals.",
    confirm: "Perfect — we got your message. Let me fetch someone right away for you.",
  },
  Designing: {
    intro: "I need help with designing.",
    followUp: "Tell us a bit more about your designing needs.",
    confirm: "Perfect — we got your message. Let me fetch someone right away for you.",
  },
  Building: {
    intro: "I need help with building.",
    followUp: "Tell us a bit more about your building needs.",
    confirm: "Perfect — we got your message. Let me fetch someone right away for you.",
  },
  Remodeling: {
    intro: "I need help with remodeling.",
    followUp: "Tell us a bit more about your remodeling needs.",
    confirm: "Perfect — we got your message. Let me fetch someone right away for you.",
  },
  Sourcing: {
    intro: "I need help with sourcing.",
    followUp: "Tell us a bit more about your sourcing needs.",
    confirm: "Perfect — we got your message. Let me fetch someone right away for you.",
  },
  Staging: {
    intro: "I need help with staging.",
    followUp: "Tell us a bit more about your staging needs.",
    confirm: "Perfect — we got your message. Let me fetch someone right away for you.",
  },
};

export default function OnSiteChatWidget() {
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState<string | null>(null);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const [sent, setSent] = useState(false);
  const [showBusyFallback, setShowBusyFallback] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(60);

  useEffect(() => {
    if (!sent) {
      setShowBusyFallback(false);
      setSecondsRemaining(60);
      return;
    }

    setSecondsRemaining(60);
    const fallbackTimer = window.setTimeout(() => {
      setShowBusyFallback(true);
    }, 60000);

    const countdownTimer = window.setInterval(() => {
      setSecondsRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => {
      window.clearTimeout(fallbackTimer);
      window.clearInterval(countdownTimer);
    };
  }, [sent]);

  function chooseTopic(value: string) {
    setTopic(value);
    setMessages([topicCopy[value]?.intro ?? `I need help with ${value.toLowerCase()}.`]);
    setSent(false);
    setShowBusyFallback(false);
    setSecondsRemaining(60);
    setDraft("");
  }

  function resetChat() {
    setTopic(null);
    setDraft("");
    setMessages([]);
    setSent(false);
    setShowBusyFallback(false);
    setSecondsRemaining(60);
  }

  function sendMessage() {
    if (!draft.trim()) return;
    setMessages((prev) => [...prev, draft.trim()]);
    setDraft("");
    setSent(true);
  }

  function submitMessage(e: React.FormEvent) {
    e.preventDefault();
    sendMessage();
  }

  return (
    <div className="fixed bottom-5 right-5 z-[70] flex flex-col items-end gap-3">
      {open && (
        <div className="w-[300px] max-w-[calc(100vw-1.5rem)] overflow-hidden rounded-[24px] border border-black/5 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.16)]">
          <div className="flex items-center justify-between border-b border-black/5 bg-white px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4f1ec]">
                <img src="/favicon.png" alt="BXP" className="h-6 w-6 object-contain" />
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-gray-400">BXP</p>
                <p className="text-sm font-medium text-gray-700">Chat</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div className="space-y-3 bg-[#fbfaf8] px-4 py-4">
            <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-white px-4 py-3 text-sm font-light leading-relaxed text-gray-700 shadow-sm">
              How can we assist you today?
            </div>

            {!topic && (
              <div className="grid grid-cols-2 gap-2">
                {topics.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => chooseTopic(item)}
                    className="rounded-full border border-gray-200 bg-white px-3 py-2 text-xs uppercase tracking-[0.18em] text-gray-600 transition hover:border-gray-400 hover:text-gray-900"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}

            {topic && (
              <>
                {messages.map((message, index) => (
                  <div
                    key={`${message}-${index}`}
                    className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-[#dde4ef] px-4 py-3 text-sm text-gray-700 shadow-sm"
                  >
                    {message}
                  </div>
                ))}

                {!sent ? (
                  <div className="max-w-[88%] rounded-2xl rounded-bl-md bg-white px-4 py-3 text-sm font-light leading-relaxed text-gray-700 shadow-sm">
                    {topicCopy[topic]?.followUp ?? `Tell us a bit more about your ${topic.toLowerCase()} needs.`}
                  </div>
                ) : (
                  <>
                    <div className="max-w-[88%] rounded-2xl rounded-bl-md bg-white px-4 py-3 text-sm font-light leading-relaxed text-gray-700 shadow-sm">
                      {topicCopy[topic]?.confirm ?? "Thanks — we have your message. Our team will follow up shortly."}
                    </div>

                    {!showBusyFallback && (
                      <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-gray-400 shadow-sm">
                        Representative wait time: 00:{String(secondsRemaining).padStart(2, "0")}
                      </div>
                    )}

                    {showBusyFallback && (
                      <>
                        <div className="max-w-[88%] rounded-2xl rounded-bl-md bg-white px-4 py-3 text-sm font-light leading-relaxed text-gray-700 shadow-sm">
                          All of our team members are now busy. Please call.
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <a
                            href="tel:+13399277803"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-gray-200 bg-white px-2 py-2.5 text-[9px] uppercase tracking-[0.08em] text-gray-600 transition hover:border-gray-400 hover:text-gray-900"
                          >
                            Call Us
                          </a>
                          <a
                            href="sms:+13399277803"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-gray-200 bg-white px-2 py-2.5 text-[9px] uppercase tracking-[0.08em] text-gray-600 transition hover:border-gray-400 hover:text-gray-900"
                          >
                            Text Us
                          </a>
                          <a
                            href="mailto:info@bxpdevelopers.com"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-gray-200 bg-white px-2 py-2.5 text-[9px] uppercase tracking-[0.08em] text-gray-600 transition hover:border-gray-400 hover:text-gray-900"
                          >
                            Email Us
                          </a>
                        </div>
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </div>

          {topic && (
            <div className="border-t border-black/5 bg-white px-3 py-3">
              <form onSubmit={submitMessage} className="flex items-end gap-2">
                <input
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      sendMessage();
                    }
                  }}
                  placeholder="Type your message..."
                  className="min-h-[44px] flex-1 rounded-2xl border border-gray-200 bg-[#fbfaf8] px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-gray-400"
                />
                <button
                  type="submit"
                  className="rounded-full bg-gradient-to-br from-gray-600 to-gray-700 px-4 py-3 text-[11px] uppercase tracking-[0.18em] text-white transition hover:shadow-lg"
                >
                  Send
                </button>
              </form>

              <button
                type="button"
                onClick={resetChat}
                className="mt-3 text-[11px] uppercase tracking-[0.18em] text-gray-400 transition hover:text-gray-700"
              >
                Start over
              </button>
            </div>
          )}
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="group flex items-center gap-2 rounded-full bg-gradient-to-br from-gray-500 to-gray-600 py-2 pl-2 pr-4 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        aria-label="Open BXP chat"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/95 shadow-sm">
          <img src="/favicon.png" alt="BXP" className="h-6 w-6 object-contain" />
        </span>
        <span className="text-sm font-medium tracking-[0.08em]">Chat</span>
      </button>
    </div>
  );
}
