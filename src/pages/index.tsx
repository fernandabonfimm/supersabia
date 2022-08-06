import { Button, Card, Col, Form, Input, Layout, Row } from "antd";
import { NextPage } from "next";
import styles from "../styles/pages/SingUp.module.css";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { useState } from "react";
import router from "next/router";
import { UserOutlined } from "@ant-design/icons";
const Login: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Layout className={styles.layoutlogin}>
        <Card className={styles.cardlogin}>
          <Row justify="center">
            <Image src={Logo} height={80} width={280} alt="logo" />
          </Row>
          <Row gutter={[32, 22]} style={{marginTop: 30}}>
            <Form layout="vertical">
              <Col xs={24} xl={24} >
                <Form.Item label="Email" name="email" style={{color:"#61288e"}}>
                  <Input
                    placeholder="example@example.com"
                    className={styles.inputlogin}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} xl={24}>
                <Form.Item label="Senha" name="Senha" className={styles.labelLogin}>
                  <Input.Password
                    placeholder="***********"
                    className={styles.inputlogin}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} xl={24}>
                <Form.Item>
                <Button className={styles.btnlogin} onClick={() => router.push("/home")}>Entrar</Button>
                </Form.Item>
              </Col>
              <Col xs={24} xl={24}>
                <Form.Item  >
               <span>Ainda não possui uma conta? <a onClick={() => router.push("/register")} style={{color: "#DD0F65", fontWeight: 500}}><UserOutlined style={{marginRight: 5, marginLeft: 5}} />Criar uma conta.</a></span>
                </Form.Item>
              </Col>
            </Form>
          </Row>
        </Card>
      </Layout>
    </>
  );
};
export default Login;
