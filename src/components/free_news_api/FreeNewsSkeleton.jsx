export default function ArticleSkeleton() {
  return (
    <section className="animate-pulse w-full max-w-5xl mx-auto">
      {/* Hero Image */}
      <div className="w-full aspect-[16/9] rounded-xl bg-gray-200" />

      <div className="mt-6">
        {/* Category */}
        <div className="h-7 w-24 rounded-full bg-gray-200" />

        {/* Title */}
        <div className="mt-5 space-y-3">
          <div className="h-8 w-full rounded bg-gray-200"></div>
          <div className="h-8 w-4/5 rounded bg-gray-200"></div>
        </div>

        {/* Source */}
        <div className="flex items-center gap-3 mt-6">
          <div className="h-11 w-11 rounded bg-gray-200"></div>

          <div className="space-y-2">
            <div className="h-4 w-28 rounded bg-gray-200"></div>
            <div className="h-3 w-40 rounded bg-gray-200"></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="h-14 rounded-xl bg-gray-200" />
          ))}
        </div>

        {/* Summary */}
        <div className="mt-10">
          <div className="h-6 w-32 rounded bg-gray-200 mb-5"></div>

          <div className="rounded-xl border border-gray-200 p-5 space-y-3">
            <div className="h-4 rounded bg-gray-200"></div>
            <div className="h-4 rounded bg-gray-200"></div>
            <div className="h-4 w-3/4 rounded bg-gray-200"></div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="mt-10">
          <div className="h-6 w-44 rounded bg-gray-200 mb-6"></div>

          {[1, 2, 3].map((item) => (
            <div key={item} className="flex gap-4 mb-5">
              <div className="h-6 w-6 rounded-full bg-gray-200 flex-shrink-0"></div>

              <div className="flex-1 space-y-2">
                <div className="h-4 rounded bg-gray-200"></div>
                <div className="h-4 w-4/5 rounded bg-gray-200"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
