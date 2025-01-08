import { Title } from "@solidjs/meta";
import { Paragraph } from "../components/Paragraph";
import { HttpStatusCode } from "@solidjs/start";

export default function NotFound() {
  const headingClasses: any = {
    title: true,
  };

  return (
    <main>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <header>
        <h2
          classList={headingClasses}
        >
          Not Found
        </h2>
      </header>
      <Paragraph paragraph={"I think you're lost!"} last={true} />
    </main>
  );
}
