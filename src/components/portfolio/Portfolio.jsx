import { Box, colors, Container, Grid, Link, Typography} from '@mui/material'
import Cabin from './../../assets/images/cabin.png'
import Cake from './../../assets/images/cake.png'
import Circus from './../../assets/images/circus.png'
import Game from './../../assets/images/game.png'
import Safe from './../../assets/images/safe.png'
import Submarine from './../../assets/images/submarine.png'
import PortfolioDivider from '../portfolio_devider/PortfolioDivider'
import AddIcon from '@mui/icons-material/Add';
import React from 'react'

export default function Portfolio() {
  return <Box sx={{py:12}} id="Portfolio">
      <Container>
        <Box sx={{display:'flex',flexDirection:'column',gap:3,alignItems:'center',justifyContent:'center'}}>
        <Typography variant='h2'component='h2'
        sx={{textAlign:'center',fontSize:48,fontWeight:700,fontFamily:'Montserrat',textTransform:'uppercase',color:'#2c3e50'}}
        >Portfolio</Typography>
        <PortfolioDivider/>
        </Box>
        <Box sx={{display:'grid',gridTemplateColumns:{md:'repeat(3,1fr)',sm:'repeat(2,1fr)',xs:'repeat(1,1fr)'},gap:3,mt:3}}>
        <Box sx={{position:'relative',"&:hover .overlay":{opacity:0.9,transitionDuration:'300ms',transitionDelay:'100ms'}}}>
          <Link href="#">
          <img alt="Cabin image" src={Cabin}width='100%' height='100%' style={{borderRadius:8}}/>
          <Box className="overlay" sx={{bgcolor:'#1abc9c',color:'white',position:'absolute',top:0,width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',opacity:0,}}>
            <AddIcon style={{fontSize:70,fontWidth:700}}/>
          </Box>
          </Link>
        </Box>
        <Box sx={{position:'relative',"&:hover .overlay":{opacity:0.9,transitionDuration:'300ms',transitionDelay:'100ms'}}}>
          <Link href="#">
          <img alt="Cake image" src={Cake}width='100%' height='100%' style={{borderRadius:8}}/>
          <Box className="overlay" sx={{bgcolor:'#1abc9c',color:'white',position:'absolute',top:0,width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',opacity:0,}}>
            <AddIcon style={{fontSize:70,fontWidth:700}}/>
          </Box>
          </Link>
        </Box>
        <Box sx={{position:'relative',"&:hover .overlay":{opacity:0.9,transitionDuration:'300ms',transitionDelay:'100ms'}}}>
          <Link href="#">
          <img alt="Circus image" src={Circus}width='100%' height='100%' style={{borderRadius:8}}/>
          <Box className="overlay" sx={{bgcolor:'#1abc9c',color:'white',position:'absolute',top:0,width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',opacity:0,}}>
            <AddIcon style={{fontSize:70,fontWidth:700}}/>
          </Box>
          </Link>
        </Box>
        <Box sx={{position:'relative',"&:hover .overlay":{opacity:0.9,transitionDuration:'300ms',transitionDelay:'100ms'}}}>
          <Link href="#">
          <img alt="Game image" src={Game}width='100%' height='100%' style={{borderRadius:8}}/>
          <Box className="overlay" sx={{bgcolor:'#1abc9c',color:'white',position:'absolute',top:0,width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',opacity:0,}}>
            <AddIcon style={{fontSize:70,fontWidth:700}}/>
          </Box>
          </Link>
        </Box>
        <Box sx={{position:'relative',"&:hover .overlay":{opacity:0.9,transitionDuration:'300ms',transitionDelay:'100ms'}}}>
          <Link href="#">
          <img alt="Safe image" src={Safe}width='100%' height='100%' style={{borderRadius:8}}/>
          <Box className="overlay" sx={{bgcolor:'#1abc9c',color:'white',position:'absolute',top:0,width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',opacity:0,}}>
            <AddIcon style={{fontSize:70,fontWidth:700}}/>
          </Box>
          </Link>
        </Box>
        <Box sx={{position:'relative',"&:hover .overlay":{opacity:0.9,transitionDuration:'300ms',transitionDelay:'100ms'}}}>
          <Link href="#">
          <img alt="Submarine image" src={Submarine}width='100%' height='100%' style={{borderRadius:8}}/>
          <Box className="overlay" sx={{bgcolor:'#1abc9c',color:'white',position:'absolute',top:0,width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',opacity:0,}}>
            <AddIcon style={{fontSize:70,fontWidth:700}}/>
          </Box>
          </Link>
        </Box>
        
        </Box>
      </Container>
  </Box>
}
