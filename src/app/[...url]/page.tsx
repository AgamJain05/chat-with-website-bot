import React from 'react'
import { PageProps } from '../../../.next/types/app/layout'

const page = ({params} : PageProps) => {
    console.log(params)
  return <p>Hello</p>
    
  
}

export default page