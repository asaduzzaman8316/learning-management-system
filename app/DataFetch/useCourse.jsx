'use client'

import { useEffect, useState } from "react"

function useCourse() {
    const [course, setCourse] = useState([]) 
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function getData() {
            try {
                setLoading(true)
                setError(null)
                
                const baseurl = process.env.NEXT_PUBLIC_BASE_URL || ''
                const res = await fetch(`${baseurl}/data.json`)
                
                if (!res.ok) {
                    throw new Error(`Failed to fetch courses: ${res.status}`)
                }
                
                const data = await res.json()
                setCourse(data) 
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        
        getData()
    }, [])

    return { course, loading, error }
}

export default useCourse