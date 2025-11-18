'use client'

import { useEffect, useState } from "react"

function useCourse() {
    const [course, setCategory] = useState([])
    const baseurl = process.env.NEXT_PUBLIC_BASE_URL 
    useEffect(() => {
        async function getData() {
            const res = await fetch(`${baseurl}/data.json`)
            const data = await res.json()
            setCategory(data)
        }
        getData()
    }, [])
    return {course}

}

export default useCourse
