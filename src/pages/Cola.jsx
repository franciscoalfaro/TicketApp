import React, { useContext, useEffect, useState } from 'react'

import { Card, Col, Divider, List, Row, Tag, Typography } from 'antd';
import { useHideMenu } from '../hooks/useHideMenu';
import { SocketContext } from '../context/SocketContext';
import { getUltimos } from '../helpers/getUltimos';

const { Title, Text } = Typography



export const Cola = () => {
  
  useHideMenu(true)

  const {socket} = useContext(SocketContext)
  const [ticket, setTicket] = useState([])


  useEffect(() =>{

    socket.on('ticket-asignado', (asignados)=>{
      setTicket(asignados)
    })
    return ()=>{
      socket.off('ticket-asignado')
    }

  },[socket])

  useEffect( ()=>{
    getUltimos().then(setTicket)

  },[])

  return (
    <>
      <Title level={1}>Atendiendo al Ticket</Title>
      <Row>
        <Col span={12}>
          <List dataSource={ticket.slice(0, 3)} renderItem={item =>
          (<List.Item>
            <Card style={{ width:300, marginTop: 16 }} actions={[ 
            <Tag color="volcano" style={{fontSize:15}}> {item.agente} </Tag>,
            <Tag color="magenta" style={{fontSize:15}}> Escritorio: {item.escritorio} </Tag>,]}>
              <Title> Numero {item.numero}</Title>
            </Card>

          </List.Item>)}>
          </List>
        </Col>

        <Col span={12} align="center">
          <Divider>Historial</Divider>
          <List dataSource={ticket.slice(0, 3)} renderItem={item =>
          (<List.Item.Meta
          title={`Ticket No. ${item.numero} `} description={
            <>
                <Text type="secondary">En el escritorio: </Text>
                <Tag color="magenta"> { item.escritorio } </Tag>
                <Text type="secondary"> Agente: </Text>
                <Tag color="volcano"> { item.agente } </Tag>
            </>}>
            

          </List.Item.Meta>)}>
          </List>

        </Col>

      </Row>
    </>
  )
}
