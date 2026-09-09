import { Box, Container, Typography } from '@mui/material'
import Avatar from './../../assets/images/avataaars.svg'
import React from 'react'
import Divider from '../divider/Divider'

export default function Hero() {
  return <Box sx={{bgcolor:'#1abc9c',py:8}}>
    <Container sx={{display:'flex',flexDirection:'column',gap:4,alignItems:'center',justifyContent:'center', height:500}}>
      <img src={Avatar} width={240} height={240} alt='Avatar'/>
      <Typography variant='h1' component='h1' 
      sx={{fontSize:{md:64,xs:44},fontFamily:'Montserrat',fontWeight:700,color:'white',textAlign:'center'}}
      >START BOOTSTRAP</Typography>
      <Divider/>
      <Typography component='p' variant='p' 
      sx={{fontSize:{md:24,xs:20},fontFamily:'Montserrat',color:'white',textAlign:'center'}}
      >Graphic Artist - Web Designer - Illustrator</Typography>
    </Container>
  </Box>
}
