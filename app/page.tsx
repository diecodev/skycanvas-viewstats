import { Hero } from "@root/app/components/home/hero";
import { SearchForm } from "./components/home/search-form";
import { MostPopular } from "./components/home/most-popular";

export default async function Home() {
  return (
    <main className="px-6 py-4 space-y-20 max-w-screen-xl mx-auto">
      <Hero />
      <SearchForm />
      <MostPopular />
    </main>
  );
}
