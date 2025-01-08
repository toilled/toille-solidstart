import { Component } from "solid-js";
import { Page } from "../interfaces/Page";

interface MenuItemProps {
    page: Page;
};

export const MenuItem: Component<MenuItemProps> = ({ page }: MenuItemProps) => {
    return (
        <li>
            <a
                href={page.link}
            >
                {page.name}
            </a>
        </li>
    );
};