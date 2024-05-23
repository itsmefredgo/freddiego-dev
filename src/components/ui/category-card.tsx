type CategoryCardProps = {
  categorySlug: string;
};

/**
 * Renders the category card component: front-end developement, back-end...
 * @param categorySlug The slug of the category to render.
 * @returns The rendered category card component.
 */
function CategoryCard({ categorySlug }: CategoryCardProps) {
  return (
    <div
      className=" text-text py-[0.125rem] px-2 rounded-lg 
      bg-[#bdbdbd] dark:bg-[#4e4e4e]"
    >
      {categorySlug}
    </div>
  );
}

export default CategoryCard;
