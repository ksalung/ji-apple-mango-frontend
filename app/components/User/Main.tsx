'use client';

import React, { useState, useRef } from 'react';
import { VideoCard } from '../Common/VideoCard';
import { HotTrend } from '../Common/HotTrend';

const MOCK_THUMBNAILS = [
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1593642532744-9377135e73ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1481487484168-9b930d5b7afd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1531297461136-82lw9b282538?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
];

const ALL_RECOMMENDED_VIDEOS: Video[] = Array.from({ length: 24 }).map((_, i) => ({
    id: `rec-${i}`,
    thumbnailUrl: MOCK_THUMBNAILS[(i + 2) % MOCK_THUMBNAILS.length],
    title: `나만 알고 싶은 숨겨진 꿀팁 대방출 #${i + 1}`,
    creator: `크리에이터 ${i + 1}`,
    views: `${i + 1000}천회`,
    postedAt: `${i + 1}시간 전`,
}));



export default function UserMain() {
    const [recommendationLimit, setRecommendationLimit] = useState(8);

    const loadMoreRecommendations = () => {
        setRecommendationLimit((prev) => Math.min(prev + 8, ALL_RECOMMENDED_VIDEOS.length));
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-12">

            <HotTrend />

            {/* --- Section 2: Recommended for You (Grid) --- */}
            <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    ✨ 회원님을 위한 맞춤 추천
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                    {ALL_RECOMMENDED_VIDEOS.slice(0, recommendationLimit).map((video) => (
                        <VideoCard key={video.id} video={video} />
                    ))}
                </div>

                {recommendationLimit < ALL_RECOMMENDED_VIDEOS.length && (
                    <div className="flex justify-center">
                        <button
                            onClick={loadMoreRecommendations}
                            className="px-8 py-3 rounded-full bg-white border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm"
                        >
                            더보기
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
}