"use client";

import { useEffect, useState } from "react";
import { Rays, Tree } from "@/components/outdoors";

async function canAutoplay(): Promise<boolean> {
	const video = document.createElement("video");
	video.muted = true;
	video.playsInline = true;

	video.src =
		"data:video/mp4;base64,AAAAHGZ0eXBtcDQyAAAAAGlzb21tcDQyAAACAGlzb21pc28yYXZjMQAAAAhmcmVlAAACJ21kYXQhEAUgpAAAAAB9AAAC6G1vb3YAAABsbXZoZAAAAAB8JbCAfCWwgAAAA+gAAAPoAAEAAAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAGkbWRpYQAAACBtZGhkAAAAAHwlsIB8JbCAAAAD6AAAB9AAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACG21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAAAAPZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAE=";

	try {
		await video.play();
		return true;
	} catch {
		return false;
	}
}

export default function AutoplayBackground() {
	const [canPlay, setCanPlay] = useState<boolean | null>(null);

	useEffect(() => {
		canAutoplay().then(setCanPlay);
	}, []);

	// Default to tree
	if (canPlay === null) return <Tree />;

	return canPlay ? <Tree /> : <Rays />;
}
