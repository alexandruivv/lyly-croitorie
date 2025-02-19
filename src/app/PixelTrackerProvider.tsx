'use client'

import dynamic from "next/dynamic";

const PixelTracker = dynamic(() => import(".//components/PixelTracker"), { ssr: false });

export default PixelTracker;