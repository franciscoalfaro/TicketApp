import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import { Ingresar } from './Ingresar';
import { Cola } from './Cola';
import { CrearTicket } from './CrearTicket';
import { Escritorio } from './Escritorio';
import { UiContext } from '../context/UiContext';
import { Layout, Menu, theme } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { useContext } from 'react';

const { Content, Footer, Sider } = Layout;

export const RouterPage = () => {
    const { token: { colorBgContainer } } = theme.useToken();
    const { ocultarMenu } = useContext(UiContext);

    return (
        <Router>
            <Layout style={{ height: '100vh' }}>
                <Sider collapsedWidth='0' breakpoint="md" hidden={ocultarMenu}>
                    <div className="demo-logo-vertical"></div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            <Link to="/ingresar">Ingresar</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<UploadOutlined />}>
                            <Link to="/crear">Crear Ticket</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<VideoCameraOutlined />}>
                            <Link to="/cola">Cola Ticket</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                            <Routes>
                                <Route index element={<Navigate to="/ingresar"></Navigate>}></Route>
                                <Route path="/ingresar" element={<Ingresar />} />
                                <Route path="/cola" element={<Cola />} />
                                <Route path="/crear" element={<CrearTicket />} />
                                <Route path="/escritorio" element={<Escritorio />} />
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
