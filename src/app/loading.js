"use client";
import Image from "next/image";
import loadingSvg from "@/app/assets/loading.png";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <Image
        src={loadingSvg}
        alt="loadingSvg"
        className="bg-transparent animate-spin"
        width={100}
        height={100}
      />
    </div>
  );
}
