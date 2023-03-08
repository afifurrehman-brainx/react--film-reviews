import React from 'react'
import { useState } from 'react'
import { Button } from '@mui/material'

const AddMovie = () => {
    const [form, setForm] = useState({
        name: "",
        year: "",
        description: ""
    })
    return (
        <div>

            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-6">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Add Movie</h1>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label for="name" className="leading-7 text-sm text-white">Name</label>
                                    <input type="text" id="name" name="name" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                                    className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label for="year" className="leading-7 text-sm text-white">Year</label>
                                    <input type="year" id="year" name="year" value={form.year} onChange={e => setForm({...form, year: e.target.value})}
                                     className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label for="description" className="leading-7 text-sm text-white">Description</label>
                                    <textarea id="description" name="description" value={form.description} onChange={e => setForm({...form, description: e.target.value})}
                                     className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <Button variant="contained">Button</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AddMovie