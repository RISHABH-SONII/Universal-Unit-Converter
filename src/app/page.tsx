import Category from "@/components/pages/home/category-section/Category";
import HeroBanner from "@/components/pages/home/hero-banner/HeroBanner";
import PopularSearch from "@/components/pages/home/popular-search/PopularSearch";
export default function Home() {
  return (
    <div>
      <HeroBanner />
      <PopularSearch />
      <Category />
    </div>
  );
}
