import FeaturedCourses from "@/components/Home/FeaturedCourses";
import HeroSection from "@/components/Home/HeroSection";
import Instructors from "@/components/Home/Instructors";
import TestimonialCards from "@/components/Home/TestimonialCards";
import UpcomingWebinar from "@/components/Home/UpcomingWebinar";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

export default function Home() {
  return (
    <div className="max-w-100vw overflow-x-hidden">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonialCards />
      <UpcomingWebinar />
      <Instructors />
    </div>
  );
}
