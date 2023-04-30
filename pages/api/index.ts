import { textListResponse } from "@/type/type"


export const getTextList = async ():Promise<textListResponse[]> =>{
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/texts`)
  const textList = await response.json()
  return textList
}