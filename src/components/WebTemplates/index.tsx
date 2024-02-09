import { Mobile } from '@/config/MediaQuery'
import React from 'react'

const WebTemplate = () => {
    const {isMobile, isTablet, isDesktop} = Mobile()
  return (
    <div>
        {
            isMobile? (<></>) : 
            isTablet? (<></>) : 
            isDesktop && (<></>)
        }
    </div>
  )
}

export default WebTemplate