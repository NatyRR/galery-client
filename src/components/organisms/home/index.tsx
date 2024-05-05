import { PaginationButtons } from "../../molecules/PaginationButtons/index";
import { Typography } from "@/components/atoms/typography";
import { ImagesDetails } from "../detailsImages/util";
import { Card } from "@/components/molecules/card";
import { Row } from "@/components/atoms/row";
import { Col } from "@/components/atoms/col";
import classes from "./styles.module.css";
import { cn } from "@/lib/utils";
import { FC } from "react";

export const HomeGalery: FC = () => {
  return (
    <div className={classes.container}>
      <div className="flex justify-center">
        <div className={classes.head}>
          <Typography
            Tag="h1"
            weight="semiBold"
            className={cn(`text-[30px]`, classes.text)}
          >
            Galería de imágenes
          </Typography>
        </div>
      </div>
      <div className={cn(``, classes.container_cards)}>
        <Row className={classes.row}>
          {ImagesDetails.map((item) => (
            <Col className="w-full md:w-3/12 flex" key={item.id}>
              <Card
                title={item.title}
                src={item.src}
                id={item.id}
                category={item.category}
                year={item.year}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
