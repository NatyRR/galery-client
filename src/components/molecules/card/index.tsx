"use client";
import { Typography } from "@/components/atoms/typography";
import classes from "./styles.module.css";
import Image from "next/image";
import { FC } from "react";
import { useRouter } from "next/navigation";

type cardProps = {
  id: number;
  title: string;
  src: string;
};

export const Card: FC<cardProps> = ({ title, src, id }) => {
  const router = useRouter();
  const handleGoToPageDetails = (id: number) => {
    router.push(`/imagedetails/${id}`);
  };
  return (
    <div
      role="button"
      className={classes.card_container}
      onClick={() => handleGoToPageDetails(id)}
    >
      <Image
        src={src}
        alt="Imagen"
        height={10}
        width={10}
        className={classes.image}
      />
      <div className={classes.footer}>
        <Typography
          Tag="span"
          weight="semiBold"
          fontSize="small"
          className="flex justify-center text-amber-950"
        >
          {title}
        </Typography>
      </div>
    </div>
  );
};
