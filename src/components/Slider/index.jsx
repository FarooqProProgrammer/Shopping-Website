import React from 'react'
import { LeftButton, RightButton } from "chakra-ui-carousel";
function Slider() {
  return (
    <div>
        <Box>
      <Provider>
        <Carousel gap={50}>
        // Carousel content
        </Carousel>
        <LeftButton
          bgColor="red.500"
          customIcon={<ArrowLeftIcon />}
          textColor={"white.500"}
        />
        <RightButton bgColor="blue.500" customIcon={<ArrowRightIcon />} />
      </Provider>
    </Box>
    </div>
  )
}

export default Slider