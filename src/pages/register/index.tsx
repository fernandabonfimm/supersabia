import { Button, Card, Col, Form, Input, Layout, Row } from "antd";
import { NextPage } from "next";
import styles from "../../styles/pages/SingUp.module.css";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import { useState } from "react";
import router from "next/router";
import { UserOutlined } from "@ant-design/icons";
const Register: NextPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
                <Form.Item label="Nome Completo" name="name">
                  <Input
                    placeholder="Insira seu nome completo..."
                    className={styles.inputlogin}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} xl={24} >
                <Form.Item label="Email" name="email">
                  <Input
                    placeholder="Insira seu email..."
                    className={styles.inputlogin}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} xl={24} >
                <Form.Item label="Senha" name="password" >
                  <Input.Password
                    placeholder="**********"
                    className={styles.inputlogin}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} xl={24} >
                <Form.Item label="Confirmar Senha" name="confirmpassword" >
                  <Input.Password
                    placeholder="**********"
                    className={styles.inputlogin}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} xl={24}>
                <Form.Item>
                <Button className={styles.btnlogin} onClick={() => router.push("/home")}>Criar Conta</Button>
                </Form.Item>
              </Col>
              <Col xs={24} xl={24}>
                <Form.Item  >
               <span>Já possui uma conta? <a onClick={() => router.push("/")} style={{color: "#DD0F65", fontWeight: 500}}><UserOutlined style={{marginRight: 5, marginLeft: 5}} />Realizar Login.</a></span>
                </Form.Item>
              </Col>
            </Form>
          </Row>
        </Card>
      </Layout>
    </>
  );
};
export default Register;
