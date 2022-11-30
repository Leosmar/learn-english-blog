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
        {/* <span className={styles.containerBackImage}>
      <Image className={styles.backImage} src={backImage} />
    </span> */}
      </header>

      <section className={styles.contentArticle}>
        {getPosts.map(({ id, title, content }) => {
          return <ArticleCard id={id} title={title} content={content} />;
        })}
      </section>
    </>
  );
}
