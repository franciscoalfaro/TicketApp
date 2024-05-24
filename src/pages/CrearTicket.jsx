import React, { useContext, useState } from 'react'
import { CaretDownFilled } from '@ant-design/icons';

import { Button, Col, Row, Typography } from 'antd'
import { useHideMenu } from '../hooks/useHideMenu';
import { SocketContext } from '../context/SocketContext';

const { Title, Text } = Typography 


export const CrearTicket = () => {
  
  useHideMenu(true)

  const {socket} = useContext(SocketContext)
  console.log(socket)
  const [tickets, setTicket ]= useState(null)

  const nuevoTicket =()=>{
    console.log('se solicito ticket')
    socket.emit('solicitar-ticket', null, (ticket)=>{
      
      setTicket(ticket)

    })
  }



  return (
    <>
    <Row>
      <Col span={14} offset={6} align="center">
        <Title level={3}> Presione para un nuevo Ticket</Title>
        <Button type='primary' icon={<CaretDownFilled />} size="large" onClick={nuevoTicket}>Nuevo Ticket</Button>
      </Col>
    </Row>

    {tickets && (
          <Row style={{marginTop:100}}>
          <Col span={14} offset={6} align="center">
            <Text level={2}>Su numero</Text>
            <br/>
            <Text type='success' style={{fontSize:55}}>{tickets.numero}</Text>
            
          </Col>
        </Row>

    )}


    
    </>
  )
}
