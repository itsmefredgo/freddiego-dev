type CategoryCardProps = {
  categorySlug: string;
};

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
