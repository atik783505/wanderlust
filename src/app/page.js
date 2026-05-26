import Banner from "@/components/Banner";
import Features from "@/components/Features";
import Categories from "@/components/Categories";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-4">
      <Banner />
      <Features />
      <Categories />
    </div>
  );
}
