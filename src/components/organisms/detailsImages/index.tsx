import { Typography } from "../../atoms/typography/index";
import { Row } from "@/components/atoms/row";
import { Col } from "@/components/atoms/col";
import classes from "./styles.module.css";
import {
  FilterSquareFill,
  Highlighter,
  PencilFill,
  TagFill,
} from "react-bootstrap-icons";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";
import { ImagesDetails } from "./util";
import { Skeleton } from "@/components/atoms/skeleton";

type DetailsImagesProps = {
  dataImage: (typeof ImagesDetails)[0] | null | undefined;
};

export const DetailsImages: FC<DetailsImagesProps> = ({ dataImage }) => {
  return (
    <div className={classes.container}>
      <Row>
        {dataImage === null ? (
          <Col className="w-full h-80 flex items-center justify-center">
            <Typography
              Tag="h1"
              weight="semiBold"
              className="mt-6  text-[30px] text-cyan-600"
            >
              No existe esta imagen
            </Typography>
          </Col>
        ) : (
          <>
            <Col className={cn(`w-full md:w-2/4`, classes.Col_image)}>
              <div className="flex justify-center mt-4">
                <div className={classes.div_image}>
                  {dataImage === undefined ? (
                    <Skeleton className="w-full h-full" />
                  ) : (
                    <Image
                      src={dataImage?.src}
                      alt=""
                      className={classes.img}
                      width={10}
                      height={10}
                    />
                  )}
                </div>
              </div>
              <div className={classes.footer}>
                <Typography
                  Tag="span"
                  weight="medium"
                  className={cn(`text-center  `, classes.title)}
                >
                  Para comentar o reportar la imágen debes ingresar al sistema,
                  para ello pulsa
                  <b className="text-amber-700 px-1">aquí</b>... Si no tienes
                  cuenta, regístrate{" "}
                  <b className="text-amber-700 pr-1">aquí.</b>
                </Typography>
              </div>
            </Col>

            <Col className={cn(`w-full md:w-2/4`, classes.Col_information)}>
              <Typography
                Tag="h2"
                weight="semiBold"
                className={cn(`text-[23px]`, classes.title)}
              >
                Sobre la Imágen:
              </Typography>
              <div className={classes.information}>
                <div className={classes.information}>
                  <div className="flex items-center gap-1">
                    <TagFill className={classes.icons} />
                    <Typography
                      Tag="span"
                      weight="semiBold"
                      className={classes.title}
                    >
                      Categoría:
                    </Typography>
                  </div>

                  {dataImage === undefined ? (
                    <Skeleton className="w-20 h-7" />
                  ) : (
                    <Typography
                      Tag="span"
                      weight="regular"
                      className={classes.subtitles}
                    >
                      {dataImage.category}
                    </Typography>
                  )}
                </div>
                <div className={classes.information}>
                  <div className="flex items-center gap-1">
                    <PencilFill className={classes.icons} />
                    <Typography
                      Tag="span"
                      weight="semiBold"
                      className={classes.title}
                    >
                      Título:
                    </Typography>
                  </div>
                  {dataImage === undefined ? (
                    <Skeleton className="w-24 h-7" />
                  ) : (
                    <Typography
                      Tag="span"
                      weight="regular"
                      className={classes.subtitles}
                    >
                      {dataImage.title}
                    </Typography>
                  )}
                </div>
                <div className={classes.information_descriptions}>
                  <div className="flex items-center gap-1">
                    <FilterSquareFill className={classes.icons} />
                    <Typography
                      Tag="span"
                      weight="semiBold"
                      className={classes.title}
                    >
                      Descripción:
                    </Typography>
                  </div>
                  <div>
                    {dataImage === undefined ? (
                      <Skeleton className="w-full h-24" />
                    ) : (
                      <Typography
                        Tag="span"
                        weight="regular"
                        className={cn(``, classes.subtitles)}
                      >
                        Este barco de la empresa Alisur fue el primero que
                        permitió el transporte de vehículos, y personas, entre
                        Lanzarote (Playa Blanca) y Fuerteventura (Corralejo. En
                        su única cubierta iban tanto personas como vehículos.
                        Estaba provista de una rampa.
                      </Typography>
                    )}
                  </div>
                </div>
              </div>
            </Col>
          </>
        )}
      </Row>
    </div>
  );
};
