import { Typography } from "../../atoms/typography/index";
import classes from "./styles.module.css";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <div className={classes.container}>
      <Typography
        Tag="h3"
        weight="semiBold"
        className="text-[18px] text-amber-50"
      >
        @2023 Lanzarote Ayer — lanzatoreayer.es
      </Typography>
    </div>
  );
};
