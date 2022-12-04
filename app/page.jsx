import styles from "./HomePage.module.css";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import getPosts from "../lib/getPosts";

export default function HomePage() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <i>Learn english</i> <br /> UPT Jose Felix Ribas
        </h1>
      </header>
    
      <section className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {getPosts.map(({ id, title, content }) => {
          return <ArticleCard id={id} title={title} content={content} />;
        })}
      </section>
    </>
  );
}
