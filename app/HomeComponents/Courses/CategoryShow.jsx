'use client'
import useCategory from '@/app/DataFetch/useCategory'
import React, { useState } from 'react'



function CategoryShow() {
    const [cid, setCid] = useState(0)
    const [btn, setBtn] = useState(0)
    const { category } = useCategory()

    function handlerClick(id) {
        setCid(id)
        setBtn(id)
    }
    
    return (
        <div>
            <div className='mt-10 flex items-center gap-8 justify-between'>
                <div className={` px-6 duration-500 transition-all py-3 ${btn === 0 ? 'bg-[#07a698] text-white ' : 'bg-white text-black'} rounded-full cursor-pointer text-lg font-medium`}>
                    <button
                        className='cursor-pointer'
                        onClick={() => handlerClick(0)}
                    >All Categories</button>
                </div>
                {
                    category.slice(0, 8).map(category => (
                        <div
                            className={`  px-6 py-2 ${btn == category.id ? 'bg-[#07a698] text-white' : 'bg-white text-black'}  duration-500 transition-all rounded-full text-lg `}
                            key={category.id}>
                            <button
                                className='cursor-pointer'
                                onClick={() => handlerClick(category.id)}
                            >{category.main_tag}</button>
                        </div>
                    ))
                }
            </div>
            <CourseCard cid={cid}  range={3}/>
        </div>
    )
}
import CourseCard from './CourseCard'

export default CategoryShow
