import React from "react";

import styles from "./AppWrapper.module.css";

export const themeCssColor = "var(--semi-color-primary)";
export const successCssColor = "#30a46c";
export const warningCssColor = "#ffc53d";
export const errorCssColor = "#e5484d";

export function AppWrapper({ children }) {
  return <div className={styles.appWrapper}>{children}</div>;
}
