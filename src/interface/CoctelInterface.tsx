export interface CoctelResponse {
    drinks: Coctel[]
}

export interface Coctel {
    "idDrink": string,
    "strDrink": string,
    "strTags": string,
    "strCategory": string,
    "strIBA": string,
    "strAlcoholic": string,
    "strGlass": string,
    "strInstructions": string,
    "strInstructionsES": null,
    "strInstructionsDE": string,
    "strInstructionsIT": string,
    "strDrinkThumb": string,
    "strIngredient1": string,
    "strIngredient2": string,
    "strIngredient3": string,
    "strMeasure1": string,
    "strMeasure2": string,
    "strMeasure3": string,
    "strCreativeCommonsConfirmed": string,
    "dateModified": string,
}

export type Letters = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'ñ' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z' 