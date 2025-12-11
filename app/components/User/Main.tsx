'use client';

import React, { useState, useRef } from 'react';
import { VideoCard } from '../Common/VideoCard';
import { HotTrend } from '../Common/HotTrend';
import { Recommendation } from '../Common/Recommendation';
import { Category } from '@/types/category';





export default function UserMain({ userCategory }: { userCategory: Category[] }) {


    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-12">

            <HotTrend />

            {/* --- Section 2: Recommended for You (Grid) --- */}
            <Recommendation />
        </div>
    );
}