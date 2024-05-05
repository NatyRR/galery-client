import { FC } from "react";
import classes from "./styles.module.css";
import { Button } from "@/components/atoms/button";
import { ChevronCompactLeft, ChevronCompactRight } from "react-bootstrap-icons";
import { cn } from "@/lib/utils";
export const PaginationButtons: FC = () => {
  return (
    <div className={classes.container}>
      <Button className={classes.button}>
        <ChevronCompactLeft height={20} width={20} />
      </Button>
      <Button className={classes.button}>1</Button>
      <Button className={classes.button}>2</Button>
      <Button className={classes.button}>3</Button>
      <Button className={classes.button}>4</Button>
      <Button className={classes.button}>5</Button>
      <Button className={classes.button}>6</Button>
      <Button className={cn(`rounded-none rounded-r-lg`, classes.button)}>
        <ChevronCompactRight height={20} width={20} />
      </Button>
    </div>
  );
};
