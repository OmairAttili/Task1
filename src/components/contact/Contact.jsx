import { Box, Container ,Typography,Button} from '@mui/material'
import React from 'react'
import BasicTextFields from '../text_field/Text_Field'
import PortfolioDivider from '../portfolio_devider/PortfolioDivider'

export default function Contact() {
  return <Box id="Contact"sx={{py:12}}>
    <Container sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <Box sx={{width:'100%',display:'flex',flexDirection:'column',gap:3,alignItems:'center',justifyContent:'center'}}>
        <Typography variant='h2'component='h2'
        sx={{textAlign:'center',fontSize:48,fontWeight:700,fontFamily:'Montserrat',textTransform:'uppercase',color:'#2c3e50'}}
        >Contact</Typography>
        <PortfolioDivider/>
        </Box>
      <Box sx={{width:{md:'60%',xs:'100%'},display:'flex',flexDirection:'column',gap:2}}>
         <BasicTextFields name = "Full name"/>
         <BasicTextFields name = "Eamil address"/>
         <BasicTextFields name = "Phone number"/>
         <BasicTextFields name = "Message"/>
          <Button variant="contained" size="large" sx={{width:100,textTransform:'none',bgcolor:'#1abc9c'}}>
          Send
        </Button>
      </Box>
    </Container>
  </Box>
}
