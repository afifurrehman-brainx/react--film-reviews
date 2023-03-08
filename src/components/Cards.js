import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import { Link } from 'react-router-dom'
import { ThreeDots } from 'react-loader-spinner'
import { getDocs } from 'firebase/firestore'
import { moviesRef } from '../firebase/firebase'

const Cards = () => {
    const [loading, setLoading] = useState(true)

    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const _data = await getDocs(moviesRef);
            _data.forEach((doc) => {
                setData((pre) => [...pre, { ...(doc.data()), id: doc.id }]);
            })
            setLoading(false);
        }
        getData()
    }, [])
    return (
        <div className='flex flex-wrap p-4 mt-3'>
            {loading ? <div className='flex justify-center items-center w-full h-[90vh]'><ThreeDots /></div> :
                data.map((e, i) => {
                    return (
                        <Link to={`/detail/${e.id}`}>
                            <div key={i} className='card bg-gray-900 p-3 mt-5 rounded-sm shadow-lg hover:-translate-y-2 duration-500 cursor-pointer mr-4'>
                                <img className='h-72 mx-auto mb-2' src={e.image} alt="" />
                                <h1><span className='text-gray-500'>Name: </span>{e.name}</h1>
                                <h1 className='flex items-center'><span className='text-gray-500'>Rating: </span>
                                    <ReactStars
                                        count={5}
                                        value={5}
                                        edit={false}
                                    />
                                </h1>
                                <h1><span className='text-gray-500'>Year: </span> {e.year}</h1>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Cards