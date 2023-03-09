//React
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

//UI
import ReactStars from 'react-stars'
import { ThreeDots } from 'react-loader-spinner'

//Firebase
import { db } from '../firebase/firebase'
import { doc, getDoc } from 'firebase/firestore'

//Components
import AddReview from './reviews/AddReview'
import Reviews from './reviews/Reviews'


const MovieDetail = () => {
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        const getData = async () => {
            const _doc = doc(db, "movies", id)
            const _data = await getDoc(_doc)
            setData(_data.data())
            setLoading(false)
        }
        getData()
    }, [])

    const [data, setData] = useState({
        name: "",
        year: "",
        description: "",
        image: ""
    })

    return (
        <>
            {loading ? <div className='flex justify-center items-center w-full h-[90vh]'><ThreeDots /></div> :
                <div className='flex justify-center mt-20'>
                    <img className='mr-20 h-96 block' src={data.image}></img>
                    <div className='mt-10 w-2/3'>
                        <h1 className='text-3xl'>{data.name}<span className='text-sm'>({data.year})</span></h1>
                        <ReactStars
                            count={5}
                            value={5}
                            edit={false}
                            size={30}
                        />
                        <div className='border-b-2 pb-3'>{data.description}</div>
                        <AddReview id={id} />
                        <Reviews id={id} />
                    </div>
                </div>
            }
        </>
    )
}

export default MovieDetail