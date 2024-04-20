type SectionTitleProps = {
  title: string;
};

/**
 * Renders a section title component.
 *
 * @param {string} title - The title of the section to display.
 * @returns The rendered section title component.
 */
function SectionTitle({ title }: SectionTitleProps) {
  return <h1 className="glow10 text-3xl font-bold pb-6 pt-2">{title}</h1>;
}

export default SectionTitle;
