import React from 'react'
import { Box,Button } from '@chakra-ui/react'

const Pagination = ({page,handlePrev,handleNext}) => {


  return (
    <Box sx={{display:"flex", gap:"1rem", justifyContent:"center", marginTop:"4rem", marginLeft:"13rem",}}>
        <Button disabled={page===1} colorScheme='blue' onClick={handlePrev}> PREV </Button>
        <p style={{fontSize:"22px"}}>{page}</p>
        <Button disabled={page===50} colorScheme='blue' onClick={handleNext}> NEXT </Button>
    </Box>
  )
}

export default Pagination