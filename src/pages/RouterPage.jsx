import React, { useContext } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { BrowserRouter as Router, Link, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import { Ingresar } from './Ingresar';
import { Cola } from './Cola';
import { CrearTicket } from './CrearTicket';
import { Escritorio } from './Escritorio';
import { UiContext } from '../context/UiContext';



const { Content, Footer, Sider } = Layout;

export const RouterPage = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const {ocultarMenu} = useContext(UiContext)

    return (
        <Router>
            <Layout style={{ height: '100vh' }}>
                <Sider collapsedWidth='0'  breakpoint="md" hidden={ocultarMenu}>
                    <div className="demo-logo-vertical"></div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            <Link to="/TicketApp/ingresar">Ingresar</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<UploadOutlined />}>
                            <Link to="/TicketApp/crear">Crear Ticket</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<VideoCameraOutlined />}>
                            <Link to="/TicketApp/cola">Cola Ticket</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                            {/* The components specified in the Route elements will be rendered based on the current route */}
                            <Routes>
                                <Route path="/TicketApp/ingresar" element={<Ingresar />} />
                                <Route path="/TicketApp/cola" element={<Cola />} />
                                <Route path="/TicketApp/crear" element={<CrearTicket />} />
                                <Route path="/TicketApp/escritorio" element={<Escritorio />} />

                                {/* Redirect to "/ingresar" if no route matches */}
                                <Route path="/" element={<Navigate to="/ingresar" />} />
                            </Routes>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2023 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </Router>
    );
};
