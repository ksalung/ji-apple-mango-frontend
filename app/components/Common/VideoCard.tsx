

export const VideoCard = ({ video, isHorizontal = false }: { video: Video; isHorizontal?: boolean }) => {
    return (
        <div className={`group cursor-pointer flex flex-col gap-3 ${isHorizontal ? 'w-80 flex-shrink-0' : 'w-full'}`}>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-200">
                <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </div>
            <div>
                <h3 className="font-semibold text-gray-900 leading-tight mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {video.title}
                </h3>
                <div className="text-sm text-gray-500">
                    <p>{video.creator}</p>
                    <p>
                        조회수 {video.views} • {video.postedAt}
                    </p>
                </div>
            </div>
        </div>
    );
};