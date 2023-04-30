import React, { useCallback, useState } from 'react'
import DropDown from '../drop-down/DropDown'
import Input from '../input/Input'
import Text from '../text/Text'
import Button from '../button/Button'
import { useRouter } from 'next/router'

const CreateAndEditText = () => {
    const itemList = ['gym','walking','swim','play','football','new category']
    const [category , setCategory] = useState(itemList[0])
    const router = useRouter()
    
    const drompDownChangeHandler = useCallback((e:any) => {
        setCategory(e.target.value)
    },[category])
    console.log(category)
  return (
    <form className='w-full h-full sm:max-w-[900px] min-h-[600px] bg-bgBlackTransparent rounded-md px-3 py-3'>
    <div className='w-full sm:w-[80%] sm:max-w-[800px] mx-auto h-[150px]  px-2 flex justify-center items-center'>
        {category=== 'new category' && <Input label='New Catgory'/>}
        <DropDown rootClass={category !== 'new category' ? 'w-full' : 'ml-2'} items={itemList} onChange={drompDownChangeHandler}/>
    </div>
    <div className='w-full flex flex-col px-2 justify-evenly items-center'>
    <Text label='Text' rootClass='w-full sm:w-[80%] sm:max-w-[800px]'/>
    <Button>Save</Button>
    <Button onClick={()=>router.push('/')} rootClass='bg-primary2 text-secondry'>Cancel</Button>
    </div>
</form>
  )
}

export default CreateAndEditText