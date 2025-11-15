import Link from 'next/link'
import React from 'react'
import { FaSign, FaUser } from 'react-icons/fa'

function Account() {
    return (
        <div className='flex items-center gap-6 justify-between'>
            <Link
                href={'/login'}
                className=' font-bold text-gray-700 duration-500 hover:-translate-y-1 transition-all hover:text-cyan-800 flex items-center gap-2'
            >
                <FaUser />
                Login
            </Link>
            <Link
                href={'/signup'}
                className=' font-bold text-gray-700 duration-500 hover:-translate-y-1 transition-all hover:text-cyan-800 flex items-center gap-2 '
            >
                <FaSign />
                Sign Up
            </Link>
        </div>
    )
}

export default Account
