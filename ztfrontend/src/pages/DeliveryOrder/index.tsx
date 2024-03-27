import { Grid, Stack } from '@mui/material'
import React from 'react'
import Header from './Header'
import Left from './Left'
import Right from './Right'

function DeliveryOrder() {
  return (
    <Stack gap={2} p={3}>
      <Header />
      {/* <Stack gap={2} direction={'row'}>
        <Left />
        <Right />
      </Stack> */}
      <Grid container spacing={2}>
        <Grid item md={7} xs={12}>
          <Left />
        </Grid>
        <Grid item md={5} xs={12}>
          <Right />
        </Grid>
      </Grid>
    </Stack>
  )
}

export default DeliveryOrder