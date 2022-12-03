export default async function Post({ params }) {
  let { id } = params;

  return <h2>este es el post {id}</h2>;
}
