import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='border-b-2 border-grey-500 flex justify-between p-5 sticky top-0 bg-black z-10'>
            <Link to="/">
                <div className='text-bold text-2xl'>Film<span className='text-red-500'>Reviews</span></div>
            </Link>
            <div className='flex items-center'>
                <Link to="/addmovie">
                    <Button><AddIcon className='mr-1'/><span className='text-white font-bold'>Add New</span></Button>
                </Link>
            </div>
        </div>
    )
}

export default Header