export function NewsCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm animate-pulse">
      {/* Image */}
      <div className="h-56 w-full bg-gray-300"></div>

      {/* Content */}
      <div className="space-y-3 p-4">
        {/* Title */}
        <div className="h-5 w-3/4 rounded bg-gray-300"></div>

        {/* Second line */}
        <div className="h-5 w-full rounded bg-gray-300"></div>

        {/* Category */}
        <div className="h-4 w-1/3 rounded bg-gray-300"></div>
      </div>
    </div>
  );
}

export default function NewsFeedSkeleton() {
  return (
    <section className="grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {[...Array(6)].map((_, index) => (
        <NewsCardSkeleton key={index} />
      ))}
    </section>
  );
}
