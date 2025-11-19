import React from 'react'

function Button({ logo, name, py }) {
    return (
        <div className={`bg-[#07a698]  w-fit ${py} flex items-center gap-1 text-white font-bold px-6 cursor-pointer after:content-['']  after:w-12 after:opacity-0 hover:after:opacity-100 after:rounded-full after:h-full after:absolute after:left-0 duration-500 transition-all after:duration-500 after:transition-all relative after:bg-[#19887f] hover:after:w-full  after:-z-10 z-20 rounded-full`}>
            {logo}
            {name}
        </div>
    )
}

export default Button
