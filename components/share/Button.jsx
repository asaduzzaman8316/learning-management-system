import React from 'react'

function Button({ logo, name, py }) {
    return (
        <div className={`bg-[#07a698] w-fit ${py} flex items-center gap-1 text-white font-bold px-6 rounded-full`}>
            {logo}
            {name}
        </div>
    )
}

export default Button
