import React from "react";
import classes from "./Hello.module.scss";

export const Hello: React.FC = () => {
  return <h1 className={classes.mainTitle}>Hola desde Vite + React</h1>;
};
