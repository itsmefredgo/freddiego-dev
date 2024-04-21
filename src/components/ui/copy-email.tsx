"use client";

import { FaRegPaperPlane } from "react-icons/fa";
import { useState } from "react";

/**
 * Renders a button that copies the email to the clipboard.
 * @returns The rendered button that copies the email to the clipboard.
 */
function CopyEmail() {
  // State to manage the copied state.
  const [copied, setCopied] = useState(false);

  return (
    <button
      onClick={async () => {
        await navigator.clipboard.writeText("hyeongo0317@gmail.com");
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 3000);
      }}
      className="text-primary flex hover:underline items-end h-[1.9rem] 
      hover:text-secondary ml-[0.2rem]"
    >
      <FaRegPaperPlane className=" h-[1.5rem] w-[1.5rem] " />
      <p className="text-[0.75rem] ml-[0.6rem]">
        {copied ? "Copied!" : "Copy Email?"}
      </p>
    </button>
  );
}

export default CopyEmail;
