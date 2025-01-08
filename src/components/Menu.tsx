import { Component, createSignal } from "solid-js";
import { Page } from "../interfaces/Page";
import { MenuItem } from "./MenuItem";

interface MenuProps {
  pages: Page[];
};

export const Menu: Component<MenuProps> = ({ pages }: MenuProps) => {
  const classes: any = {
    animate__animated: true,
    animate__fadeInRight: true,
  };

  return (
    <ul classList={classes}>
      {pages.map((page, key) => {
        return <MenuItem page={page} />
      })}
    </ul>
  );
};