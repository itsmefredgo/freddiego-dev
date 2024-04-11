import { usePathname } from "next/navigation";
import { FaRegPaperPlane } from "react-icons/fa";
import { FollowerPointerCard } from "@/src/components/ui/following-pointer";
import { FaPaperPlane } from "react-icons/fa";

function ContactButton() {
  return (
    <a
      href={`${usePathname()}#contact`}
      className="h-[1.5rem] w-[1.5rem] hover:text-secondary"
      aria-label="Contact me button"
    >
      <FollowerPointerCard
        title="Get in touch"
        className="h-[1.5rem] w-[1.5rem] flex justify-center items-center"
        isFixed={true}
      >
        <FaRegPaperPlane className="h-[1.25rem] w-[1.25rem] " />
      </FollowerPointerCard>
    </a>
  );
}

export default ContactButton;
