import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import styles from "./_.module.css";
import CategoryService from "./../../services/category.js";

const FeaturedCategoryGrid = () => {
  const { data: categories } = useQuery({
    queryKey: ["/category/featured"],
    queryFn: async () => {
      return CategoryService.getFeatured().then(
        (response) => response.data.data.categories
      );
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        {categories?.map((category) => (
          <Link
            to={`/category/${category.id}`}
            key={category.id}
            className={styles.category}
          >
            <img
              src={`http://localhost:8080${category.thumbnail}`}
              alt={category.name}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategoryGrid;
