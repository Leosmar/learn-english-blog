import Link from "next/link";
import getPostData from "./getPostData";
import styles from "./post.module.css";
export default async function Post({ params }) {
  let { id } = params;

  const post = await getPostData(id);

  return (
    <>
      <Link className={styles.backBtn} href="/">← Volver al inicio</Link>
      <div
        className={styles.container}
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </>
  );
}
