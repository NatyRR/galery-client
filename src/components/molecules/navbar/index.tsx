import { ChevronDoubleLeft, ExclamationOctagon } from "react-bootstrap-icons";
import { Typography } from "@/components/atoms/typography";
import { Button } from "@/components/atoms/button";
import classes from "./styles.module.css";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/atoms/sheet";
import Link from "next/link";
import { FC } from "react";

export const Navbar: FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.desktop}>
        <Typography Tag="h1" weight="bold" className={classes.title}>
          Lanzarote ayer
        </Typography>
        <div className={classes.items}>
          <Link href="/">
            <Typography Tag="span" weight="semiBold" className="text-amber-50">
              Inicio
            </Typography>
          </Link>
          <Link href="/galeria">
            <Typography Tag="span" weight="semiBold" className="text-amber-50">
              Galería
            </Typography>
          </Link>
          <div className={classes.buttons_div}>
            <Button className={classes.button}>
              <Link href="/login">Ingresar</Link>
            </Button>
            <Button className={classes.button}>
              <Link href="/registro">Registrarse</Link>
            </Button>
          </div>
        </div>
        <div className={classes.mobile}>
          <Sheet>
            <SheetTrigger>
              <ChevronDoubleLeft
                height={30}
                width={30}
                style={{ color: "white" }}
              />
            </SheetTrigger>
            <SheetContent className={classes.content}>
              <SheetHeader>
                <SheetTitle>
                  <Typography
                    Tag="h1"
                    weight="semiBold"
                    className="text-[30px] text-amber-50 mt-4"
                  >
                    Lanzarote ayer
                  </Typography>
                </SheetTitle>
                <SheetDescription>
                  <div className={classes.items_mobile}>
                    <Button className={classes.button_mobile}>
                      <Link href="/">Inicio</Link>
                    </Button>
                    <Button className={classes.button_mobile}>
                      <Link href="/galeria">Galeria</Link>
                    </Button>
                    <div className={classes.buttons_div_mobile}>
                      <Button className={classes.button_mobile}>
                        <Link href="/login">Ingresar</Link>
                      </Button>
                      <Button className={classes.button_mobile}>
                        <Link href="/registro">Registrarse</Link>
                      </Button>
                    </div>
                  </div>

                  <div className={classes.span}>
                    <div className="flex justify-center">
                      <ExclamationOctagon
                        height={40}
                        width={40}
                        className={classes.icons}
                      />
                    </div>
                    <Typography
                      Tag="span"
                      weight="regular"
                      className="text-amber-50 mt-3"
                    >
                      Para comentar o reportar la imágen debes ingresar al
                      sistema, para ello pulsa{" "}
                      <b className="text-cyan-900">aqui.</b>
                    </Typography>
                    <Typography
                      Tag="span"
                      weight="regular"
                      className="text-amber-50 mt-3"
                    >
                      Si no tienes cuenta, dale click a{" "}
                      <b className="text-cyan-900">Registrarse.</b>
                    </Typography>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};
