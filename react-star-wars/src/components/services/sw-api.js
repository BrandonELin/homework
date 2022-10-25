import { useEffect, useState } from "react"

export default function SwAPI() {

    const [starships, setStarships] = useState(null)
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            getStarships()
        }, 1000)
    }, [])

    async function getStarships(){
        try {
            console.log('hi')
            const response = await fetch(`https://swapi.dev/api/starships/`)
            const data = await response.json()
            console.log(data.results)
            setStarships(data.results)
            setIsPending(false)
        } catch (err) {
            console.log ("No starships")
            console.log(err)
        }
    }

    
    return { starships, isPending }
}