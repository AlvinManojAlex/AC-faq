import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import FaqBoxContent from "../components/FaqBoxContent";
import FaqBoxTitle from "../components/FaqBoxTitle";
import FaqFinal from "../components/FaqFinal";
import FaqTitle from "../components/FaqTitle";
import Layout from "../components/UI/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <FaqTitle />
      <FaqFinal />
    </Layout>
  );
}
