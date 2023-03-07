import React from 'react'
import { useState } from 'react'
import ReactStars from 'react-stars'
const Cards = () => {
    const [data, setData] = useState([
        {
            name: "Ant-Man Quantumania",
            rating: 3,
            year: 2023,
            src: "https://media.glamour.com/photos/638e476b4640457ce2470cc8/master/w_382,h_566,c_limit/antmanandthewaspquantumania_lob_crd_02.jpg"
        },
        {
            name: "Aquaman",
            rating: 5,
            year: 2023,
            src: "https://source.boomplaymusic.com/buzzgroup2/M00/37/DE/rBEeJGKxjXyAfuaLAALDc3CS9iQ25.jpeg"
        },
        {
            name: "Shazam",
            rating: 3.5,
            year: 2023,
            src: "https://hips.hearstapps.com/hmg-prod/images/best-new-comedy-movies-2023-shazam-1670021757.jpg"
        },
        {
            name: "3D Salmon",
            rating: 2,
            year: 2023,
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-MjAyMw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00341368-vwmkfakcgy-portrait.jpg"
        }

    ])
    return (
        <div className='flex flex-wrap p-4 mt-3'>
            {data.map((e, i) => {
                return (
                    <div key={i} className='card bg-gray-900 p-3 mt-5 rounded-sm shadow-lg hover:-translate-y-2 duration-500 cursor-pointer mr-4'>
                        <img className='h-72 mx-auto mb-2' src={e.src} />
                        <h1><span className='text-gray-500'>Name: </span>{e.name}</h1>
                        <h1><span className='text-gray-500'>Rating: </span>
                            <ReactStars
                                count={5}
                                value={e.rating}
                                edit={false}
                            />
                        </h1>
                        <h1><span className='text-gray-500'>Year: </span> {e.year}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards