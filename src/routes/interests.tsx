import { Title } from "@solidjs/meta";
import { Paragraph } from "../components/Paragraph";

import pages from '../configs/pages.json';

export default function Home() {
  const headingClasses: any = {
    title: true,
  };

  const page = pages[2];

  return (
    <main>
      <Title>{page.title}</Title>
      <header>
        <h2
          classList={headingClasses}
        >{page.title}
        </h2>
      </header>
      {page.body.map((paragraph, index) => {
        return <Paragraph paragraph={paragraph} last={index + 1 === page.body.length} />;
      })}
    </main>
  );
}
