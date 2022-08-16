import {
  HeartFilled,
  LinkedinOutlined,
  MailOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { Col, Divider, Layout, Row } from "antd";
import Image from "next/image";
import Logo from "../../public/logo-dark.png";

import styles from "../styles/components/HomeLayout.module.css";
const { Footer } = Layout;

const FooterComponent: React.FC = () => {
  return (
    <>
      <Footer className={styles.footer}>
        <Row gutter={[32, 22]}>
          <Col xs={8} xl={8}>
            <Row justify="space-between" gutter={[32, 22]}>
              <Image src={Logo} height={80} width={250} alt="logo" />

              <Col xs={24} xl={24}>
                <a
                  className={styles.ahover}
                  href="https://contate.me/fernandabonfimm"
                >
                  <WhatsAppOutlined style={{ marginRight: 10 }} /> +55 016
                  991313277
                </a>
              </Col>
              <Col xs={24} xl={24}>
                <a
                  className={styles.ahover}
                  href="mailto:bonfimfernanda12@gmail.com"
                >
                  <MailOutlined style={{ marginRight: 10 }} />{" "}
                  bonfimfernanda12@gmail.com
                </a>
              </Col>
              <Col xs={24} xl={24}>
                <a
                  className={styles.ahover}
                  href="https://www.linkedin.com/in/fernanda-bonfim-santos-9596aa193/"
                >
                  <LinkedinOutlined style={{ marginRight: 10 }} />{" "}
                  https://www.linkedin.com/in/fernanda-bonfim-santos-9596aa193/
                </a>
              </Col>
            </Row>
          </Col>
          <Col xs={8} xl={8}>
            <Row gutter={[32, 22]}>
              <Col xs={24} xl={24}>
                <h3 className={styles.titlefooter}>Sobre Mim </h3>
              </Col>

              <Col xs={24} xl={24}>
                <p className={styles.descriptionfooter}>
                  Sou apaixonada por tecnologia e artes, e tenho o enorme
                  prazer, admiração e ambição, quando trabalho com ambas ao
                  mesmo tempo, como fiz nesse portfólio.
                </p>
              </Col>
              <Col xs={24} xl={24}>
                <p className={styles.descriptionfooter}>
                  Estudante de Ciências da Computação - Centro Universitário
                  Baráo de Mauá
                </p>
              </Col>
            </Row>
          </Col>
          <Col xs={8} xl={8}>
            <Row gutter={[32, 22]}>
              <Col xs={24} xl={24}>
                <h3 className={styles.titlefooter}>Objetivo do Portfólio</h3>
              </Col>
              <Col xs={24} xl={24}>
                <p className={styles.descriptionfooter}>
                  ° Ensinar e despertar curiosidade e ensinamento de política e
                  história para crianças infanto-juvenil.
                </p>
              </Col>
              <Col xs={24} xl={24}>
                <p className={styles.descriptionfooter}>
                  ° Mostrar minhas habilidades em FrontEnd e WebDesign, com
                  tecnologias como: ReactJs, NextJs, Typescript, HTML, CSS.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Divider className={styles.divider} />
        <Row justify="center">
          <h3 style={{ color: "#fff" }}>
            Portfolio created with <HeartFilled /> by{" "}
            <a
              href="https://www.linkedin.com/in/fernanda-bonfim-santos-9596aa193/"
              className={styles.ahover}
            >
              Fernanda Bonfim
            </a>
          </h3>
        </Row>
      </Footer>
    </>
  );
};
export { FooterComponent };
