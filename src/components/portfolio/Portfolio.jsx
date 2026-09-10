import { Box, Container, Grid} from '@mui/material'
import Cabin from './../../assets/images/cabin.png'
import Cake from './../../assets/images/cake.png'
import Circus from './../../assets/images/circus.png'
import Game from './../../assets/images/game.png'
import Safe from './../../assets/images/safe.png'
import Submarine from './../../assets/images/submarine.png'
import React from 'react'

export default function Portfolio() {
  return <Box>
      <Container sx={{display:'flex',flexWrap:'wrap'}}>
        <Box sx={{width:'33%'}}>
          <img src={Cabin}/>
        </Box>
        <Box sx={{width:"33%"}}>
          <img src={Cake}/>
        </Box>
        <Box sx={{width:"33%"}}>
          <img src={Circus}/>
        </Box>
        <Box sx={{width:"33%"}}>
          <img src={Game}/>
        </Box>
        <Box sx={{width:"33%"}}>
          <img src={Safe}/>
        </Box>
        <Box sx={{width:"33%"}}>
          <img src={Submarine}/>
        </Box>
      </Container>
  </Box>
}
