import React, { useEffect, useState } from 'react'
import { getCoctelByFirtLetter } from '../services/cocterServices'
import { Coctel, Letters } from '../interface/CoctelInterface'

export const useGetCoctel = () => {
    const [coctels, setCoctels] = useState<Coctel[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [letter, setletter] = useState<Letters>('a')
    useEffect(() => {
        const getData = async () => {
            const coctels = await getCoctelByFirtLetter(letter)
            setCoctels(coctels.drinks)
            setIsLoading(false)
        }
        getData()
    }, [])
    return {
        coctels,
        isLoading,
        setletter
    }
}