import Header from "./../components/header/header";
import FeaturedCategoryGrid from "../components/featured-category-grid/featured-category-grid";

const styles = {
  container: {
    width: "1280px",
    margin: "auto",
    marginTop: "2rem",
  },
};

const Home = () => {
  return (
    <>
      <Header />
      <div style={styles.container}>
        <FeaturedCategoryGrid />
      </div>
    </>
  );
};

export default Home;
