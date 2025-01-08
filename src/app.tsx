import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { createSignal, createEffect, Show } from 'solid-js';

import '@picocss/pico';
import 'animate.css';
import { useAssets } from "solid-js/web";

import { StyleRegistry, css, renderSheets, type StyleData } from "solid-styled";
import { Headings } from "./components/Title";
import { Menu } from "./components/Menu";

import pages from './configs/pages.json';

function GlobalStyles() {
  css`
  `;
  return null;
}

export default function App() {
  const sheets: StyleData[] = [];
  useAssets(() => renderSheets(sheets));
  const contentClasses: any = {
    animate__animated: true,
    animate__zoomIn: true,
  };


  return (
    <Router
      root={props => (
        <MetaProvider>
          <StyleRegistry styles={sheets}>
            <GlobalStyles />
            <nav>
              <Headings />
              <Menu pages={pages} />
            </nav>
            <div classList={contentClasses}>
              <Suspense>{props.children}</Suspense>
            </div>
          </StyleRegistry>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
