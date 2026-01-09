"use client";

import Link from "next/link";
import { HoverEffect } from "../ui/card-hover-effect";

export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];

function UpcomingWebinar() {
  return (
    <div className=" py-16">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          FEATURED WEBINARS
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-5xl">
          Enhance Your Musical Journey
        </p>
      </div>
      <div className="mt-10 max-w-6xl mx-auto px-4">
        <HoverEffect items={projects} />
      </div>
      <div className="mt-10 text-center">
        <Link
          href={"/"}
          className="px-4 py-2 rounded-3xl border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All webinars
        </Link>
      </div>
    </div>
  );
}

export default UpcomingWebinar;
