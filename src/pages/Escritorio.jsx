import React, { useContext, useState } from 'react'
import { CloseCircleOutlined,RightCircleFilled } from '@ant-design/icons';

import { Row, Col, Typography, Button, Divider } from 'antd'
import { useHideMenu } from '../hooks/useHideMenu';
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';
import { useNavigate } from 'react-router-dom';
import { SocketContext } from '../context/SocketContext';
const { Title, Text } = Typography



export const Escritorio = () => {
  useHideMenu(false)
  const navigate = useNavigate();

  const [usuario] = useState(getUsuarioStorage())
  const [ticket, setTicket] = useState({})

  const {socket} = useContext(SocketContext)



  const salir = () => {
    localStorage.clear()
    navigate('/TicketApp/ingresar')
   
  }

  const siguiente = () => {
    socket.emit('siguiente-ticket', usuario, (ticket)=>{
      setTicket(ticket)
      console.log(ticket)
    })
    
  }

  if(!usuario.agente || !usuario.escritorio){
    navigate('/TicketApp/ingresar')
    
}
  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{usuario.agente}</Title>
          <Text>Se encuentra utilizando el escritorio: </Text>
          <Text type='success'>{usuario.escritorio}</Text>
        </Col>

        <Col span={4} align="right">
          <Button type='danger' onClick={salir} style={{ background: '#e12828', color:'#ffffff' }}><CloseCircleOutlined />Salir
          </Button>
        </Col>
      </Row>

      <Divider></Divider>

      
      { ticket ?   
      (<Row>
        <Col>
          <Text >Esta Atendiendo el ticket numero: </Text>
          <Text style={{fontSize:20}} type="danger">{ticket.numero}</Text>
        </Col>
      </Row>):  <strong className=''>No existen mas Ticket</strong> 
    
      }

      



      <Row>
        <Col offset={18} span={6} aling="right">
          <Button onClick={siguiente} type="primary"><RightCircleFilled />Siguiente
          </Button>
         
        </Col>
      </Row>


    </>

  )
}
