export default function VideoCard({ video }) {
  const { snippet, statistics } = video;

  return (
    <div className="cursor-pointer">
      <img
        src={snippet.thumbnails.high.url}
        alt={snippet.title}
        className="w-full rounded-lg"
      />

      <div className="flex mt-2 gap-2">
        <div>
          <p className="text-sm font-semibold line-clamp-2">
            {snippet.title}
          </p>

          <p className="text-xs text-gray-500">
            {snippet.channelTitle}
          </p>

          <p className="text-xs text-gray-500">
            {statistics.viewCount} views
          </p>
        </div>
      </div>
    </div>
  );
}