import { Typography } from "@/components/atoms/typography";
import { ImagesDetails } from "../detailsImages/util";
import { Card } from "@/components/molecules/card";
import { Row } from "@/components/atoms/row";
import { Col } from "@/components/atoms/col";
import classes from "./styles.module.css";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/select";
import { cn } from "@/lib/utils";
import { FC } from "react";
import { PaginationButtons } from "@/components/molecules/PaginationButtons";

export const Galeria: FC = () => {
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

          <div className={classes.items}>
            <div className="flex items-center gap-3">
              <Typography
                Tag="h3"
                weight="semiBold"
                className={cn(`text-amber-50`, classes.text_input)}
              >
                Categoría:
              </Typography>

              <Select>
                <SelectTrigger className={cn(`w-[180px]`, classes.input)}>
                  <SelectValue placeholder="Seleccione Categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Arrecife">Arrecife</SelectItem>
                  <SelectItem value="Aeropuerto y aviones">
                    Aeropuerto y aviones
                  </SelectItem>
                  <SelectItem value="Teguise">Teguise</SelectItem>
                  <SelectItem value="La graciosa y demás">
                    La graciosa y demás
                  </SelectItem>
                  <SelectItem value="San Bartolomé">San Bartolomé</SelectItem>
                  <SelectItem value="Tinajo">Tinajo</SelectItem>
                  <SelectItem value="Timafaya">Timafaya</SelectItem>
                  <SelectItem value="Haría">Haría</SelectItem>
                  <SelectItem value="Tías">Tías</SelectItem>
                  <SelectItem value="La Geria">La Geria</SelectItem>
                  <SelectItem value="Yaisa">Yaisa</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Typography
              Tag="h3"
              weight="semiBold"
              className={cn(`text-amber-50`, classes.text_input)}
            >
              Año:
            </Typography>
            <Select>
              <SelectTrigger className={cn(`w-[180px]`, classes.input)}>
                <SelectValue placeholder="Seleccione Año" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="1900-1910">1900-1910</SelectItem>
                  <SelectItem value="1910-1920">1910-1920</SelectItem>
                  <SelectItem value="1930-1940">1930-1940</SelectItem>
                  <SelectItem value="1940-1950">1940-1950</SelectItem>
                  <SelectItem value="1950-1960">1950-1960</SelectItem>
                  <SelectItem value="1960-1970">1960-1970</SelectItem>
                  <SelectItem value="1970-1980">1970-1980</SelectItem>
                  <SelectItem value="1980-1990">1980-1990</SelectItem>
                  <SelectItem value="1990-2000">1990-2000</SelectItem>
                  <SelectItem value="2000-2010">2000-2010</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
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

      <div className={classes.pagination_container}>
        <div className={classes.result_span}>
          <Typography
            Tag="span"
            weight="regular"
            className={cn(`text-sky-600`, classes.result_span)}
          >
            Se encontraron <b className="text-teal-950s">(34)</b> imagenes de
            esta categoría
          </Typography>
        </div>
        <div>
          <PaginationButtons />
        </div>
      </div>
    </div>
  );
};
