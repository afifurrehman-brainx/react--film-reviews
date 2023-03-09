import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { doc, updateDoc, query, where, getDocs } from 'firebase/firestore'
import { reviewsRef, db } from '../../firebase/firebase'

import ReactStars from 'react-stars'
import { ThreeDots } from 'react-loader-spinner'

const Reviews = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState()

    useEffect(() => {
        setLoading(true)
        async function getData() {
            setData([]);
            let quer = query(reviewsRef, where('movieid', '==', props.id))
            const querySnapshot = await getDocs(quer);
            querySnapshot.forEach((doc) => {
                setData((prev) => [...prev, doc.data()])
            })
            setLoading(false)
        }
        getData();
    }, [])

    return (
        <>
            {loading ? <ThreeDots /> :
                <>
                    {data.map((e, i) => {
                        return (
                            <div key={i} className='w-2/3 mt-4 border-t-2 border-slate-600 bg-slate-800 p-3'>
                                <div className='name text-sm flex items-center mt-3'>
                                    <span className='text-blue-500 text-xl mr-2'>{e.name}</span> ({new Date(e.timestamp).toLocaleString()})
                                </div>
                                <ReactStars
                                    size={20}
                                    value={e.rating}
                                />
                                <div className='mt-1'>{e.comment}</div>
                            </div>
                        )
                    })}
                </>
            }

        </>
    )
}

export default Reviews