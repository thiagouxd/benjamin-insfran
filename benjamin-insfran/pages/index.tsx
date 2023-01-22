import Head from "next/head";
import Articles from "../sections/Articles";
import Awards from "../sections/Awards";
import NextSteps from "../sections/NextSteps";
import Hero from "../sections/Hero";
import Podiums from "../sections/Podiums";
import Ranking from "../sections/Ranking";
import OG from "../sections/About/OG";
import Recognitions from "sections/Recognitions";

export default function Home() {
  return (
    <>
      <Head>
        <title>Benjamin Insfran - Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="author"
          content="benjamin insfran beach volleyball olympic games athens 2004"
        />
        <meta
          name="keywords"
          content="benjamin insfran beach volleyball olympic games athens 2004"
        />
        <meta
          name="description"
          content="Benjamin was born in a small rural island close to the border of Brazil and Paraguay, his father was in the army and his mother a housewife with 6 children. Benjamin beat all odds and transformed his reality through volleyball."
        />
      </Head>

      <main>
        <Hero />
        <Ranking />
        <Podiums />
        <Awards />
        <OG />
        <Articles />
        <Recognitions />
        <NextSteps />
      </main>
    </>
  );
}
