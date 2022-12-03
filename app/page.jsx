import styles from "./HomePage.module.css";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import getPosts from "../lib/getPosts";
import getPostData from "./post/[id]/getPostData";

export default async function HomePage() {
  const post = await getPostData(1);
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <i>Learn english</i> <br /> UPT Jose Felix Ribas
        </h1>
      </header>

      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }}></div>

      <section className={styles.contentArticle}>
        {getPosts.map(({ id, title, content }) => {
          return <ArticleCard id={id} title={title} content={content} />;
        })}
      </section>
    </>
  );
}
