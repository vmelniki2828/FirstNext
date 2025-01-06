import { getAllArticles } from "./(server)/api";
import { ROUTING } from "./routing";
import { AppLink } from "./shared/components/app-link";
import React from 'react';

export default async function Home({ searchParams }: { searchParams: { [key: string]: string } }) {

  const allArticles = await getAllArticles();
  console.log(await searchParams['page'])
  return (
    <>
      <h1>Drag13 blog, page {}</h1>
      <ul>
        {allArticles.map((article) => (
          <AppLink href={ROUTING.article(article.name)}>
            <li key={article.name}>{article.header}</li>
          </AppLink>
        ))}
      </ul>
    </>
  );
}
