// "use client";

import { usePathname } from "next/navigation";
import { FaRegPaperPlane } from "react-icons/fa";

function ContactButton() {
  return (
    <a href={`${usePathname()}#contact`}>
      <FaRegPaperPlane />
    </a>
  );
}

export default ContactButton;
