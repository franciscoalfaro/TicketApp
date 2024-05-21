import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import { Button, Divider, Form, Input, InputNumber, Typography } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { useHideMenu } from '../hooks/useHideMenu';
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';

const { Title, Text } = Typography

export const Ingresar = () => {
    useHideMenu(false);
    
    const [usuario]= useState(getUsuarioStorage())
    console.log(usuario)
    
    const navigate = useNavigate();

    const onFinish = ({agente, escritorio}) => {
        navigate('escritorio')

        localStorage.setItem('agente', agente)
        localStorage.setItem('escritorio', escritorio)
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    if(usuario.agente || usuario.escritorio){
        navigate('escritorio')
    }

    return (
        <>
        <Title>Ingresar</Title>
        <Text>Ingresa tu nombre y numero de escritorio</Text>
        <Divider></Divider>
            <Form name="basic" labelCol={{ span: 8, }} wrapperCol={{ span: 16, }} style={{ maxWidth: 600, }} initialValues={{ remember: true, }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
                <Form.Item label="Usuario" name="agente" rules={[{ required: true, message: 'Por favor ingresa tu usuario!', },]}>
                    <Input></Input>
                </Form.Item>

                <Form.Item label="Escritorio" name="escritorio" rules={[{ required: true, message: 'Por favor ingrese el numero de escritorio!', },]}><InputNumber min={1} max={10}/>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16, }} >
                    <Button type="primary" htmlType="submit" shape='round'>
                        <SaveOutlined></SaveOutlined> Ingresar
                    </Button>
                </Form.Item>
            </Form>
        </>

    )
}
