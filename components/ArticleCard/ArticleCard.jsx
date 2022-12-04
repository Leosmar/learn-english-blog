"use client"

import React from "react";
import styles from "./ArticleCard.module.css";
import Link from "next/link";

export default function ArticleCard({ id, title, content }) {
  return (
    <Link className="relative h-full p-6 transition-all rounded-lg hover:scale-105 hover:bg-sky-100 shadow-box" href={`/post/${id}`}>
      <article className="flex flex-col justify-center gap-y-4">
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.article}>{content}</p>
        <p className={styles.readMore}>Leer más...</p>
      </article>
    </Link>
  );
}
