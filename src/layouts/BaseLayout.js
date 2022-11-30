import { Layout, Menu, Button, PageHeader } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    BoldOutlined
} from "@ant-design/icons";
import ConfirmationModal from "../components/ConfirmationModal";
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
function LayoutSurvey({ children, title, keys }) {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    const { Content, Footer, Sider } = Layout;

    const onCancel = () => {
        setVisible(false);
    };

    const onOk = () => {
        window.sessionStorage.clear();
        navigate("/");

    };

    const onClickLogout = () => {
        setVisible(true);
    };


    const year = new Date().getFullYear();

    const itemsMenu = [
        {
            label: <Link to="/wilayah/1">Payakumbuah</Link>,
            key: "payakumbuah",
            icon: <BoldOutlined />,

        },
        {
            label: <Link to="/wilayah/2">Solok</Link>,
            key: "solok",
            icon: <BoldOutlined />,

        },
        {
            label: <Link to="/wilayah/3">Bukik Tinggi</Link>,
            key: "bukikTinggi",
            icon: <BoldOutlined />,

        },
        {
            label: <Link to="/wilayah/4">Padang Panjang</Link>,
            key: "padangPanjang",
            icon: <BoldOutlined />,

        },

    ];
    return (
        <Layout>
            <ConfirmationModal
                onOk={onOk}
                onCancel={onCancel}
                visible={visible}
                message={"Apakah anda yakin ingin keluar ?"}
                title="Logout"
            />
            <Sider breakpoint="lg" collapsedWidth="0">
                <Menu
                    defaultSelectedKeys={'home'}
                    defaultOpenKeys={["home"]}
                    selectedKeys={keys}
                    mode="inline"
                    items={itemsMenu}
                    theme="dark"
                ></Menu>
            </Sider>
            <Layout className="site-layout-background">
                <PageHeader
                    ghost={false}
                    onBack={
                        keys === "home"
                            ? false
                            : () => window.history.back()
                    }
                    title={title}
                    extra={[
                        <Button key="3" type="text" onClick={onClickLogout}>
                            Logout
                        </Button>
                    ]}
                />
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 1000,
                    }}>

                    {children}

                </Content>
                <Footer
                    style={{
                        textAlign: "center",
                    }}
                >
                    Survey ©{year} PERKIMTAN
                </Footer>
            </Layout>
        </Layout>
    );
}
export default LayoutSurvey;
