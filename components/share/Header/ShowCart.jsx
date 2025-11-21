'use client'
import React from 'react'
import Cart from '../Cart'
import { CiHeart } from 'react-icons/ci'
import { BsCart3 } from 'react-icons/bs'
import { useSelector } from 'react-redux'

function ShowCart() {
    const cartCount = useSelector((state) => state.cart.value)
    const wishlist = useSelector((state) => state.cart.wishlist)
    return (
        <>
            <Cart logo={<CiHeart />} count={wishlist} />
            <Cart logo={<BsCart3 />} count={cartCount} />
        </>
    )
}

export default ShowCart
