import type { NextPage } from "next";
import Head from "next/head";

import Navbar from "../src/components/Navbar";

import Profile from "../src/sections/Profile";
import BlogSection from "../src/sections/Blog";

const Blog: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Axel Estrada | Blog</title>
        <meta
          name="description"
          content="Articulos sobre HTML, CSS, Javascript y todo lo relacionado al Desarrollo Web"
        />
      </Head>

      <main>
        <div className="container">
          <Navbar />

          <Profile />
          <BlogSection />
        </div>
      </main>
    </div>
  );
};

export default Blog;
