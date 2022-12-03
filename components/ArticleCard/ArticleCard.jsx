"use client"

import React from "react";
import styles from "./ArticleCard.module.css";
import Link from "next/link";

export default function ArticleCard({ id, title, content }) {
  return (
    <Link className={styles.container} href={`/post/${id}`}>
      <article>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.article}>{content}</p>
        <p className={styles.readMore}>Leer más...</p>
      </article>
    </Link>
  );
}
