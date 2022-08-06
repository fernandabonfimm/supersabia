import { Button, Col, Layout, Row } from "antd";
import styles from "../styles/components/HomeLayout.module.css";
import Image from "next/image";
import Logo from "../../public/logo.png";
import router, { Router } from "next/router";
const { Header } = Layout;

const NavbarComponent: React.FC = () => {
  return (
    <>
      <Header className={styles.navbar}>
        <Row gutter={[32, 22]}>
          <Col xs={8} xl={8} style={{ marginTop: 5 }}>
            <Image
              src={Logo}
              height={34}
              width={122}
              alt="logo"
              style={{ cursor: "pointer" }}
              onClick={() => router.push("/home")}
            />
          </Col>
          <Col xs={2} xl={2}>
            <a className={styles.hyperlink} onClick={() => router.push("/home")}>Home</a>
          </Col>
          <Col xs={2} xl={2}>
            <a className={styles.hyperlink} onClick={() => router.push("/about")}>Sobre</a>
          </Col>
          <Col xs={4} xl={4}>
            <a className={styles.hyperlink} onClick={() => router.push("/services")}>Serviços</a>
          </Col>
          <Col xs={4} xl={4}>
            <a className={styles.hyperlink} onClick={() => router.push("/contact")}>Contato</a>
          </Col>
          <Col xs={4} xl={4}>
            <Button
              className={styles.contactbtn}
              onClick={() => router.push("/quizz")}
            >
              Quizz
            </Button>
          </Col>
        </Row>
      </Header>
    </>
  );
};
export { NavbarComponent };
