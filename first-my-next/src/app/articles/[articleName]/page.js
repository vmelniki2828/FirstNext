export default async function ArticlePage({ params }) {
  const { articleName } = await params;
  return <>This is article {articleName}</>;
}
