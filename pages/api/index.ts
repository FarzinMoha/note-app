import { textListResponse } from "@/type/type"


export const getTextList = async ():Promise<textListResponse[]> =>{
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/texts`,{cache:'no-store'})
  const textList = await response.json()
  return textList
}


export const addText = async (text:textListResponse):Promise<textListResponse> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/texts`,{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify(text)
  })
  const newText = await response.json()
  return newText
}