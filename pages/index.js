import { useState } from "react";
import FaqFinal from "../components/FaqFinal";
import FaqFinal1 from "../components/FaqFinal1";
import FaqTitle from "../components/FaqTitle";
import Layout from "../components/UI/Layout";

export default function Home() {
  return (
    <Layout>
      <FaqTitle />
      <div>
        <FaqFinal />
      </div>
      <div>
        <FaqFinal1 />
      </div>
    </Layout>
  );
}
