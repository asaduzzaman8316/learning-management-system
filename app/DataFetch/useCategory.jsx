'use client'

import { useEffect, useState } from "react"

function useCategory() {
    const [category, setCategory] = useState([])
    const baseurl = process.env.NEXT_PUBLIC_BASE_URL
    useEffect(() => {
        async function getData() {
            const res = await fetch(`${baseurl}/categorys.json`)
            const data = await res.json()
            setCategory(data)
        }
        getData()
    }, [])
    return {category}

}

export default useCategory
