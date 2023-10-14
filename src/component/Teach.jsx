import React from 'react'
import { sectionWarper } from '../higerOrderComponent'
import {technologies} from '../constants/data'
import BallCanvas from './canvas/ball'

const Teach = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default sectionWarper(Teach, "")
