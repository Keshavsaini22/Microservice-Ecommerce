import * as React from 'react';
import Box from '@mui/material/Box';
import Carousel from 'react-material-ui-carousel'
import { Button, Paper } from '@mui/material';
import Header1 from '../../../assets/header1.png'
import Header2 from '../../../assets/header2.png'
import Header3 from '../../../assets/header3.png'


function Header() {
  return (
    <Carousel navButtonsAlwaysInvisible={true}
      next={(next, active) => console.log(`we left ${active}, and are now at ${next}`)}
      prev={(prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
    >
      <Box className='image' width={'100%'} height={'100px'} >
        <img src={Header1} alt="" />
      </Box>
      <Box className='image' width={'100%'} height={'100px'} >
        <img src={Header2} alt="" />
      </Box>
      <Box className='image' width={'100%'} height={'100px'} >
        <img src={Header3} alt="" />
      </Box>
    </Carousel >
  );
}

export default Header