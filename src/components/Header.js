import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';

function Header() {
    return (
        <div className='border-b-2 border-grey-500 flex justify-between p-5'>
            <div className='text-bold text-2xl'>Film<span className='text-red-500'>Reviews</span></div>
            <div className='flex items-center'>
                <Button><AddIcon className='mr-1'/><span className='text-white font-bold'>Add New</span></Button>
            </div>
        </div>
    )
}

export default Header