import { Card, Col, Layout, Row } from "antd";
import { NextPage } from "next";
import { FooterComponent } from "../../components/Footer";
import { NavbarComponent } from "../../components/Navbar";

const {Content} = Layout;

const Home: NextPage = () => {
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <NavbarComponent/>
        <Content>
        </Content>
        <FooterComponent/>
      </Layout>
    </>
  );
};

export default Home;
