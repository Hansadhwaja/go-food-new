
import FoodLists from "@/components/FoodLists";

import SearchSection from "@/components/SearchSection";
import FoodListSkeleton from "@/components/Skeleton/FoodListSkeleton";
import Welcome from "@/components/Welcome";
import { getUser } from "@/lib/actions/user";
import { Suspense } from "react";

export default async function Home(props: { searchParams?: Promise<{ query?: string }> }) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const user = await getUser();

  return (
    <main className="min-h-screen max-container">
      <Welcome username={user?.firstName!} />
      <SearchSection />
      {/* <Suspense fallback={<FoodListSkeleton />}>
        <FoodLists searchString={query} />
      </Suspense> */}
      <FoodLists searchString={query} />
    </main>
  );
}
