import React from 'react'
import PopularMenu from './PopularMenu'
import Heading from './Heading'

function PopularCourse() {
    return (
        <div >
            <Heading name={'Popular Courses'} />
            <div className='space-y-3 divide-gray-300 divide-y-2'>
                <PopularMenu title={"Power Electronics"} dese={'Free'} />
                <PopularMenu title={"Introduction to Calculus"} dese={'Free'} />
                <PopularMenu title={"Basic Laws and Policies"} dese={'Free'} />
            </div>
        </div>
    )
}

export default PopularCourse
