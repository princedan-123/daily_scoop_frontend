export default function formatArticle(articleBody) {
  const sentence = articleBody.split(/(?<=\.)\s+(?=[A-Z])/);
  return sentence;
}
