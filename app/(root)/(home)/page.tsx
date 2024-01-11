import Filter from "@/components/Filter";
import Header from "@/components/Header";
import ResourceCard from "@/components/ResourceCard";
import SearchForm from "@/components/SearchForm";
import { getResources } from "@/sanity/actions";
import React from "react";

export const revalidate = 1;

interface Props {
  searchParams: { [key: string]: string | undefined };
}
const page = async ({ searchParams }: Props) => {
  const resources = await getResources({
    query: searchParams?.query || "",
    category: searchParams?.category || "",
    page: "1",
  });

  console.log("resources =", resources);
  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col bg-black-100">
      <section className="nav-padding w-full">
        <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
          <h1 className="sm:heading1 heading2 mb-6 text-center text-white">
            JavaScript Mastery Resources
          </h1>
        </div>
        <SearchForm />
      </section>
      <Filter />
      <section className="flex-center mt-6 w-full flex-col sm:mt-20">
        <Header
          query={searchParams?.query || ""}
          category={searchParams?.category || ""}
        />
        <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
          {resources ? (
            resources.map((resource: any) => (
              <ResourceCard
                key={resource._id}
                title={resource.title}
                // type={resource.type}
                id={resource._id}
                image={resource.image}
                downloadNumber={resource.views}
                slug={resource._id}
              />
            ))
          ) : (
            <p className="text-white-400">No Resouce Found in search</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default page;
