import type { NextPage } from "next";
import Head from "next/head";

import Navbar from "/src/components/Navbar";

import Profile from "/src/sections/Profile";
import ResumeSection from "/src/sections/Resume";

const Resume: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Axel Estrada | Curriculum</title>
        <meta
          name="description"
          content="La mayoria de los conocimientos que he adquirido a lo largo
          del tiempo han sido de manera autodidacta, tomando cursos en diferentes
          plataformas de educacion online"
        />
      </Head>

      <main>
        <div className="container">
          <Navbar />

          <Profile />
          <ResumeSection />
        </div>
      </main>
    </div>
  );
};

export default Resume;
