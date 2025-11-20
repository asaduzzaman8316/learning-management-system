import Heading from '@/components/share/Heading'
import Heading2 from '@/components/share/Heading2'
import React from 'react'
import post1 from '@/app/assets/post-1.jpg'
import post2 from '@/app/assets/post-2.png'
import BlogCard from './BlogCard'

function Blog() {
    return (
        <div className='py-16  mb-36'>
            <div className='w-full lg:w-[70%]  mx-auto flex flex-col items-center justify-center gap-10'>
                <Heading name={'News & Blogs'} />
                <Heading2 name={'Latest News Updates'} color={'text-gray-800'} />
                <div className='grid lg:grid-cols-2 top-0 items-center gap-5'>
                    <BlogCard name={"Repurpose mission critical action life items rather total linkage suds"} image={post1} />
                    <BlogCard name={"Strategies for Managing Stress and Preventing Burnout in Education"} image={post2} />
                </div>
            </div>
        </div>
    )
}

export default Blog
