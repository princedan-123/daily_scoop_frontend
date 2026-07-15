export default function NewsSummary({ summary }) {
  return (
    <section>
      <h3 className="font-bold px-4 py-2 mt-2 text-lg"> News in brief</h3>
      <div className="rounded shadow bg-white p-8 mx-4">
        <p>{summary}</p>
      </div>
    </section>
  );
}
