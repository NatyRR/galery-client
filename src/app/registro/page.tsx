import React from "react";
import classes from "./styles.module.css";
import { PersonSquare } from "react-bootstrap-icons";
import { Input } from "@/components/atoms/input";
import { Typography } from "@/components/atoms/typography";
import Link from "next/link";
import { Button } from "@/components/atoms/button";

const registro = () => {
  return (
    <div className="bg-slate-300 w-full h-[calc(100vh-125px)] flex justify-center items-center flex-col">
      <div className={classes.container}>
        <PersonSquare
          height={40}
          width={40}
          style={{ color: "white" }}
          className="mb-3"
        />
        <div className={classes.container_imput}>
          <Input type="Nombre" placeholder="Nombre" className={classes.input} />
          <Input type="gmail" placeholder="Gmail" className={classes.input} />
          <Input
            type="Contraseña"
            placeholder="Contraseña"
            className={classes.input}
          />
          <Input
            type="confirmarContraseña"
            placeholder="Confirmar contraseña"
            className={classes.input}
          />
        </div>

        <Button className={classes.button}>Login</Button>
      </div>
      <div>
        <div className="mt-3">
          <Typography Tag="span" className="text-cyan-900">
            ¿Ya tienes cuenta?
            <Link href="/login" className="">
              <b className="text-cyan-950 px-1">Acceder</b>
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default registro;
