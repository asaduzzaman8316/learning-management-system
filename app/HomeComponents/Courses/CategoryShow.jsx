'use client'
import useCategory from '@/app/DataFetch/useCategory'
import React, { useEffect, useState } from 'react'


function CategoryShow() {
    const [cid, setCid] = useState(0)
    const { category } = useCategory()
    const [categoryRange, setCategoryRange] = useState(2)

    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;
            setCategoryRange(width > 600 ? 8 : 2);
        }

        handleResize(); // run once
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    function handlerClick(id) {
        setCid(id)
    }

    return (
        <div>
            <div className='mt-10 flex items-center gap-8  justify-between'>
                <div className={` px-6 duration-500 transition-all py-3 ${cid === 0 ? 'bg-[#07a698] text-white ' : 'bg-white text-black'} rounded-full cursor-pointer text-lg font-medium`}>
                    <button
                        className='cursor-pointer'
                        onClick={() => handlerClick(0)}
                    >All Categories</button>
                </div>
                {
                    category.slice(0, categoryRange).map(category => (
                        <div
                            className={`  px-6 py-2 ${cid == category.id ? 'bg-[#07a698] text-white' : 'bg-white text-black'}  duration-500 transition-all rounded-full text-lg `}
                            key={category.id}>
                            <button
                                className='cursor-pointer'
                                onClick={() => handlerClick(category.id)}
                            >{category.main_tag}</button>
                        </div>
                    ))
                }
            </div>
            <CourseCard cid={cid} range={3} />
        </div>
    )
}
import CourseCard from './CourseCard'

export default CategoryShow
