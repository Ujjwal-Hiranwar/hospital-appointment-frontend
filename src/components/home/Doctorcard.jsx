import React from 'react'

export default function Doctorcard({ image, name, post, degree }) {
  return (
    <div className=" bg-white shadow-lg rounded-lg m-8">
            <img className="w-68 h-56 object-cover object-center" src={image} alt="Doctor" />
            <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
                <p className="text-gray-600">{post}</p>
                <p className="text-gray-600 mt-2">{degree}</p>
            </div>
        </div>
  )
}
