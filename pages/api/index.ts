import { textEditResponse, textListResponse } from "@/type/type"


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



export const getText = async (id:string):Promise<string> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/texts/${id}`)
  const text = await response.json()
  return text
}

export const editText = async (id:string | string[] | undefined , text:textListResponse) =>{
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/texts/${id}`,{
    method:'PUT',
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify(text)
  })
  const newText = await response.json()
  return newText
}
export const deleteTextItem = async (id:string):Promise<string> =>{
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/texts/${id}`,{
    method:'DELETE',
    headers:{
      'Content-Type':'application/json'
    },
  })
  const newText = await response.json()
  return newText
}