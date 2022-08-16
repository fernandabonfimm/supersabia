import React from "react";
import {Row, Col, Layout} from 'antd';
import Image from "next/image";
import styles from "../styles/components/HomeLayout.module.css";

const {Header} = Layout;

const Announcement: React.FC = () => {
    return (
        <>
        <Header className={styles.announcementlayout}>
            <Row gutter={[32, 22]}>
                <Col xs={12} xl={12}>
                <Row gutter={[22, 8]}>
                    <Col xs={24} xl={24}>
                        <h1>Venha aprender conosco!</h1>
                    </Col>
                    <Col xs={24} xl={24}>
                        <Image src="logo.png" />
                    </Col>
                </Row>
                </Col>
                <Col xs={12} xl={12}>
           
                </Col>
            </Row>
        </Header>
        </>
    )
}
export { Announcement}