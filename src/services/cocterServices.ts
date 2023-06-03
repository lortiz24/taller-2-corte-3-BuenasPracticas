import { coctelApi } from "../api/cocterApi";
import { Coctel, CoctelResponse } from "../interface/CoctelInterface";







export const getCoctelByFirtLetter = async (letter: string) => {
    const res = await coctelApi.get<CoctelResponse>(`?f=${letter}`)
    return res.data
}