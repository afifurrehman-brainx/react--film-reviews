//React
import React, { useState } from 'react'

//UIs
import { Button } from '@mui/material'
import { TailSpin } from 'react-loader-spinner'
import swal from 'sweetalert'
import ReactStars from 'react-stars'

//Firebase
import { addDoc } from 'firebase/firestore'
import { reviewsRef } from '../../firebase/firebase'

const AddReview = (props) => {
    const [review, setReview] = useState("")
    const [rating, setRating] = useState(0)
    const [loading, setLoading] = useState(false)
    const addReviewHandler = async () => {
        setLoading(true)
        try {
            await addDoc(reviewsRef, {
                name: "afif",
                comment: review,
                movieid: props.id,
                timestamp: new Date().getTime(),
                rating: rating
            });
            sweetAlert("Review Added Successfully", "success")
        } catch (err) {
            sweetAlert("Something went wrong", "error")
        }
        setLoading(false)
    }

    const sweetAlert = (title, icon) => {
        swal({
            title: title,
            icon: icon,
            buttons: false,
            timer: 3000
        })
    }

    return (
        <div className="mt-10 w-1/3">
            <ReactStars
                size={25}
                value={rating}
                edit={true}
                onChange={(rate) => setRating(rate)}
            />
            <textarea type="text" id="comment" name="comment"
                value={review} onChange={e => setReview(e.target.value)} placeholder="Share your review here..."
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
            <div className='capatilize' onClick={addReviewHandler}>
                <Button variant="contained"> {loading ? <TailSpin height={20} /> : "Share Review"}</Button>
            </div>
        </div>
    )
}

export default AddReview