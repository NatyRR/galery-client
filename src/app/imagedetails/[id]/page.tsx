"use client";
import { DetailsImages } from "@/components/organisms/detailsImages";
import { ImagesDetails } from "@/components/organisms/detailsImages/util";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const imagedetails = () => {
  const params = useParams();
  const [dataImage, setDataImage] = useState<
    (typeof ImagesDetails)[0] | null
  >();

  const handleGetImageData = () => {
    const data = ImagesDetails.find((item) => Number(params.id) === item.id);
    if (!data) {
      setDataImage(null);
    } else {
      setDataImage(data);
    }
  };

  useEffect(() => {
    if (params.id) {
      handleGetImageData();
    }
  }, [params.id]);

  return (
    <div className="bg-slate-300  ">
      <DetailsImages dataImage={dataImage} />
    </div>
  );
};

export default imagedetails;
