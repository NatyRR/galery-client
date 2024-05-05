import React from "react";
import classes from "./styles.module.css";
import { PersonFill } from "react-bootstrap-icons";
import { Input } from "@/components/atoms/input";
import { Button } from "@/components/atoms/button";
import { Checkbox } from "@/components/atoms/checkbox";
import Link from "next/link";
import { Typography } from "@/components/atoms/typography";
import { Label } from "@/components/atoms/label";

const login = () => {
  return (
    <div className="bg-slate-300 w-full h-[calc(100vh-125px)] flex justify-center items-center flex-col">
      <div className={classes.container}>
        <PersonFill
          height={40}
          width={40}
          style={{ color: "white" }}
          className="mb-3"
        />
        <div className={classes.container_imput}>
          <Input type="gmail" placeholder="Gmail" className={classes.input} />
          <Input
            type="password"
            placeholder="Contraseña"
            className={classes.input}
          />
        </div>
        <div className={classes.metodPassword}>
          <div className="flex items-center">
            <Checkbox id="terms" className={classes.text} />
            <Label htmlFor="terms" className={classes.text}>
              <Typography
                Tag="span"
                weight="bold"
                fontSize="small"
                className={classes.text}
              >
                Remember Me
              </Typography>
            </Label>
          </div>
          <div>
            <Link href="/">
              <Typography
                Tag="span"
                weight="bold"
                fontSize="small"
                className={classes.text}
              >
                Forgot Password?
              </Typography>
            </Link>
          </div>
        </div>
        <Button className={classes.button}>Login</Button>
      </div>
      <div>
        <div className="mt-3">
          <Typography Tag="span" className="text-cyan-900">
            ¿No tienes cuenta?
            <Link href="/registro" className="">
              <b className="text-cyan-950 px-1">Registrate</b>
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default login;
