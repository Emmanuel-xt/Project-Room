import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { BookOpenCheckIcon } from "lucide-react";

interface Props {
  id: string;
  // type: string;
  title:  string ;
  image: string;
  downloadNumber: number;
  slug: string;
  downloadLink : string;
}

const ResourceCard = ({ id, title, image, downloadNumber, downloadLink }: Props) => {
  return (
    <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px">
      {/* <Link href={`/resource/${id}`}> */}
        <CardHeader className="flex-center flex-col gap-2.5 !p-0">
          <div className="">
            <Image
              src={image}
              className="h-full rouded-md object-cover"
              width={384}
              height={440}
              alt={title}
            />
          </div>
          <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left">
            {title}
          </CardTitle>
        </CardHeader>
      {/* </Link> */}
      <CardContent className="flex-between mt-4 p-0">
        <div className="flex-center body-medium text-white">
          {/* <Image src="/downloads.svg" width={20} height={20} alt="download" /> */}
          <BookOpenCheckIcon />
          {downloadNumber}
        </div>
        <Link href={downloadLink} className="flex-center text-orange gap-1.5 body-semibold">
          Visit Now
          <Image src='/arrow-blue.svg' width={13} height={13} alt="arrow" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
