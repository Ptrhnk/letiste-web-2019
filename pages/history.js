import React from "react";
import Link from "next/link";

import Page from "../layout/main";

const History = () => {
  return (
    <Page>
      <h1>Welcome to history section</h1>
      <br />
      <Link href="/">
        <a>go home</a>
      </Link>
    </Page>
  );
};

export default History;
