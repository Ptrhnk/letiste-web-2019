import React from "react";
import Link from "next/link";

import Page from "../layout/main";

const About = () => {
  return (
    <Page>
      <h1>About page</h1>
      <br />
      <Link href="/">
        <a>go home</a>
      </Link>
    </Page>
  );
};

export default About;
