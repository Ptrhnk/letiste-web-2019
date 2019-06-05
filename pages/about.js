import React from "react";
import Link from "next/link";

import Main from "../layout/main";

const About = () => {
  return (
    <Main>
      <h1>About page</h1>
      <br />
      <Link href="/">
        <a>go home</a>
      </Link>
    </Main>
  );
};

export default About;
