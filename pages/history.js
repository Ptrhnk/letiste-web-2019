import React from "react";
import Link from "next/link";

import Main from "../layout/main";

const History = () => {
  return (
    <Main>
      <h1>Welcome to history section</h1>
      <br />
      <Link href="/">
        <a>go home</a>
      </Link>
    </Main>
  );
};

export default History;
