import { useState } from "react";
import type { FormEvent } from "react";
import { toast } from "sonner";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvzkonzz";

/**
 * Submits a contact form to Formspree in the background (no page redirect)
 * and shows a success / error toast on the portfolio itself.
 */
export function useFormspree() {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSending(true);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        form.reset();
        toast.success("Message sent", {
          description: "Thanks for reaching out — I'll get back to you soon.",
        });
      } else {
        const data = await res.json().catch(() => null);
        const detail = data?.errors?.map((err: { message: string }) => err.message).join(", ");
        toast.error("The message could not be sent", {
          description: detail || "Please try again or contact me on LinkedIn.",
        });
      }
    } catch {
      toast.error("The message could not be sent", {
        description: "Check your connection and try again, or contact me on LinkedIn.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return { handleSubmit, isSending };
}
