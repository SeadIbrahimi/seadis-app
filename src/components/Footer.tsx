import React from 'react'
import Motions from './Motions'
import { getDate } from '../utils/GetCurrentDate'

function Footer() {

  return (
    <Motions>
    <div className='text-center border-t container mx-auto h-[100px] flex justify-center items-center'>
        Copyrights &copy; Sead Ibrahimi<br/>{getDate()}
    </div>
    </Motions>
  )
}

export default Footer