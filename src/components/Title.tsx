import { Component, createSignal } from "solid-js";

import titles from '../configs/titles.json';

export const Headings: Component = () => {
  const [titleAnimate, setTitleAnimate] = createSignal(false);
  const [subtitleAnimate, setSubtitleAnimate] = createSignal(false);

  function animateTitle() {
    if (!titleAnimate()) {
      setTitleAnimate(true);
      setTimeout(() => setTitleAnimate(false), 900);
    }
  }

  function animateSubtitle() {
    if (!subtitleAnimate()) {
      setSubtitleAnimate(true);
      setTimeout(() => setSubtitleAnimate(false), 900);
    }
  }

  const titleClasses: any = {
    animate__animated: true,
    animate__fadeInLeft: true,
  };

  return (
    <ul classList={titleClasses}>
      <li>
        <hgroup>
          <h1
            classList={{
              title: true,
              animate__animated: true,
              animate__heartBeat: titleAnimate() === true,
              question: true,
            }}
          >{titles.title}</h1>
          <h2
            classList={{
              title: true,
              animate__animated: true,
              animate__heartBeat: subtitleAnimate() === true,
              question: true,
            }}
          >{titles.subtitle}</h2>
        </hgroup>
      </li>
    </ul>
  );
};