"use client";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
      title: "Learn from Experts",
      description:
        "Get personalized guidance from professional musicians and experienced instructors. Whether you're a beginner or an advanced learner, our faculty is here to support your musical journey.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--blue-500))] text-white">
          Learn from Experts
        </div>
      ),
    },
    {
      title: "Live Performance Training",
      description:
        "Gain confidence on stage with our live performance training. Practice with a band, refine your stage presence, and learn how to engage an audience with energy and confidence.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--emerald-500),var(--teal-500))] text-white">
          Live Performance Training
        </div>
      ),
    },
    {
      title: "Music Theory & Composition",
      description:
        "Master the fundamentals of music with in-depth lessons on music theory, scales, chords, and composition. Learn how to create melodies, harmonies, and structured musical pieces.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] text-white">
          Music Theory & Composition
        </div>
      ),
    },
    {
      title: "Instrument Mastery",
      description:
        "Improve your skills on your chosen instrument with specialized lessons for guitar, piano, drums, violin, and more. Learn proper techniques, scales, and improvisation strategies.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--red-500),var(--orange-500))] text-white">
          Instrument Mastery
        </div>
      ),
    },
    {
      title: "Recording & Music Production",
      description:
        "Learn how to record, mix, and produce music using industry-standard software. Explore sound engineering, editing techniques, and how to create professional-quality recordings.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--yellow-500),var(--amber-500))] text-white">
          Recording & Music Production
        </div>
      ),
    },
    {
      title: "Music Business & Career Guidance",
      description:
        "Understand the business side of music. Learn about branding, marketing, contracts, and how to build a sustainable music career in today’s industry.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--blue-500))] text-white">
          Music Business & Career Guidance
        </div>
      ),
    },
  ];

  
const WhyChooseUs = () => {
  return (
    <div>
        <StickyScroll content={content}>

        </StickyScroll>
    </div>
  )
}

export default WhyChooseUs