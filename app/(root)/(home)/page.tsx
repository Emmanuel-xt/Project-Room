import Filter from "@/components/Filter";
import Header from "@/components/Header";
import ResourceCard from "@/components/ResourceCard";
import SearchForm from "@/components/SearchForm";
import { getResources, getResourcesPlaylist } from "@/sanity/actions";
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

  const resourcePlaylist =  await getResourcesPlaylist()

  console.log("resources =", resources);
  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col bg-black-100">
      <section className="nav- w-full">
        <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-cover bg-center text-center">
          <h1 className="sm:heading1 heading2 mb-2 text-center text-white">
            Emma Js <br /> <span className="text-lg text-orange">Project Room</span>
          </h1>
        </div>
        <SearchForm />
      </section>
      <Filter />
      <section className="flex-center mt-4 w-full flex-col sm:mt-2">
        <Header
          query={searchParams?.query || ""}
          category={searchParams?.category || ""}
        />
        <div className="mt-5 flex w-full flex-wrap justify-center items-center gap-16 sm:justify-start">
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
                downloadLink={resource.downloadLink}
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
