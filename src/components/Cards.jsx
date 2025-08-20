import React from 'react'
import ball from '../assets/ball.png'
import Images from './Images'
const Cards = () => {
    return (
        <div className='card-my gap-[20px] pt-[30px] pb-[20px] pr-[37px] pl-[24px] bg-[#FDEDE8]! flex items-center'>
            <div className="left">
                <Images src={ball} />
            </div>

            <div className="right pl-[25px]">
                <h2 className='text-[20px]! font-medium leading-[28px] text-black m-[0]! pb-[7px]'>Immediate Deployment</h2>
                <p className='text-[16px]! font-medium leading-[24 px] text-[#71717A]  m-[0]!'>Et vero eos et accusamus et
                      <span className='block'>iusto odio dignissimos</span>
                    </p>
            </div>
        </div>
    )
}

export default Cards