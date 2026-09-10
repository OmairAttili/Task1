import { Box, Button, Container, Typography } from '@mui/material'
import DividerComp from '../divider/Divider'
import DownloadIcon from '@mui/icons-material/Download';
import React from 'react'

export default function About() {
  return <Box sx={{bgcolor:'#1abc9c',mt:12}} id="About">
    <Container sx={{py:12,display:'flex',flexDirection:'column',gap:2,justifyContent:'center',alignItems:'center', color:'white',textAlign:'center'}}>
      <Typography sx={{fontSize:48,fontFamily:'Montserrat',fontWeight:700}}>ABOUT</Typography>
      <DividerComp/>
      <Box sx={{display:'flex',flexDirection:{md:'row',xs:'column'},color:'white',fontFamily:'Montserrat',fontSize:16,justifyContent:'center',alignItems:'center',gap:3,textAlign:'start'}}>
        <Typography variant='p'component='p'><br/>Freelancer is a free bootstrap theme created by <br/>Start Bootstrap. The download includes the <br/> complete source files including HTML, CSS, and<br/> JavaScript as well as optional SASS stylesheets <br/> for easy customization.</Typography>
        <Typography variant='p'component='p'>You can create your own custom avatar for the <br/> masthead, change the icon in the dividers, and <br/> add your email address to the contact form to <br/> make it fully functional!</Typography>
      </Box>
      <Button variant="outlined" sx={{border:1.5,borderColor:'white',color:'white',display:'flex',alignItems:'center',justifyContent:'center',gap:1,p:1.5,mt:3,":hover":{bgcolor:'white',color:'black'},transitionDuration:'500ms'}}>
        <DownloadIcon/>
        <Typography sx={{textTransform:'none',fontFamily:'Montserrat'}}>Free Download!</Typography>
      </Button>
    </Container>
  </Box>
}
