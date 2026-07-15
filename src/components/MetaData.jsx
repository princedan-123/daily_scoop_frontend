export default function Metaarticle({ article }) {
  console.log(article);
  let authors = "unknown";
  let publishers = "unknown";
  let published_at = "unkown";
  let orignal_url = null;
  if (article?.authors && article.authors.length === 1) {
    authors = article.authors[0];
  } else if (article?.authors && article.authors.length > 1) {
    authors = article.authors.join(", ");
  }
  if (article?.publisher) {
    publishers = article?.publisher;
  }
  if (article?.original_url) {
    orignal_url = article?.original_url;
  }
  if (article?.published_at) {
    const date = new Date(article?.published_at);
    published_at = date.toLocaleString();
  }
  return (
    <div className="flex justify-between gap-4 p-3">
      <div className="font-bold">Authors: {authors}</div>
      <div className="font-bold">Published by: {publishers}</div>
      <div className="font-bold">Published_at: {published_at}</div>
      {orignal_url ? (
        <div className="underline">
          <a href={orignal_url} target="_blank" rel="noopener noreferrer">
            Original Source ↗
          </a>
        </div>
      ) : null}
    </div>
  );
}
