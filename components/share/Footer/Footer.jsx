import React from 'react'
import Image from 'next/image'
import footerbg from '@/app/assets/footer-bg.png'

function Footer() {
    return (
        <div className=''>
            <Image src={footerbg} width={6000} height={3000} alt='footer bg' className='h-auto w-auto '/>

        </div>
    )
}

export default Footer
