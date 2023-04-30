import CreateAndEditText from '@/components/create-and-edit-text/CreateAndEditText'
import React, { useCallback, useState } from 'react'

const AddNewText = () => {
  return (
    <main className='w-screen min-h-screen flex justify-center items-center px-3 py-5'>
        <CreateAndEditText/>
    </main>
  )
}

export default AddNewText