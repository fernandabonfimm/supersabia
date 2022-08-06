import React, { useState } from "react";

import { Layout } from "antd";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/components/HomeLayout.module.css";


type Props = {
  title: string;
  children: React.ReactNode;
};

const {Header, Footer} = Layout;

const HomeLayout: React.FC<Props> = ({
  children,
  title,
}) => {

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header>SuperSabiá</Header>
      <Layout.Content>
        {children}
      </Layout.Content>
      <Footer className={styles.footer}>SuperSabiá</Footer>
    </Layout>
  );
};

export default HomeLayout;

