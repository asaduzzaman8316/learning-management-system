import React from 'react'
import Image from 'next/image'
import footerbg from '@/app/assets/footer-bg.png'
import Subscribe from './Subscribe'
import FooterAbout from './FooterAbout'
import FooterHeading from './FooterHeading'
import Link from './Link'
import FooterPost from './FooterPost'
import image1 from '@/app/assets/footer-post-1.png'
import image2 from '@/app/assets/footer-post-2.png'
import LastFooter from './LastFooter'

function Footer() {
    return (
        <div className='lg:mt-16  relative  '>
            <Image src={footerbg} width={8000} height={3000} alt='footer bg' className='h-auto w-auto absolute top-0 -z-10 left-0' />
            <div className='pt-20'>
                <Subscribe />
            </div>
            <div className='grid grid-cols-1 w-full lg:w-[70%] mx-auto my-16 lg:grid-cols-4 items-start justify-between gap-10'>
                <FooterAbout />
                <div>
                    <FooterHeading name={'company info'} />
                    <div className='mt-8 space-y-4'>
                        <Link name={'About Us'} />
                        <Link name={'Resource Center'} />
                        <Link name={'Careers'} />
                        <Link name={'Instructor'} />
                        <Link name={'Become A Teacher'} />
                    </div>
                </div>
                <div>
                    <FooterHeading name={'useful links'} />
                    <div className='mt-8 space-y-4'>
                        <Link name={'All Courses'} />
                        <Link name={'Digital Marketing'} />
                        <Link name={'Design & Branding'} />
                        <Link name={'Storytelling & Voice Over'} />
                        <Link name={'News & Blogs'} />
                    </div>
                </div>
                <div>
                    <FooterHeading name={'recent post'} />
                    <div className='mt-8 space-y-5'>
                        <FooterPost name={'Where Dreams Find A Home'} image={image1} />
                        <FooterPost name={'Where Dreams Find A Home'} image={image2} />
                    </div>
                </div>
            </div>
            <LastFooter />
        </div>
    )
}

export default Footer
