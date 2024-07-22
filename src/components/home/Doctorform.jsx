import axios from 'axios';
import React, { useState } from 'react'
import {BASE_URL} from '../../baseURL'

export default function Doctorform() {
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        post: '',
        degree: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            axios.post(`${BASE_URL}/home/dashboard/admin/senddoctordata`,formData)
        } catch (error) {
            
        }
        
    };
  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Add Doctor</h2>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Doctor's name"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="image" className="block text-gray-700 font-bold mb-2">Image URL</label>
                <input
                    type="text"
                    id="image"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Image URL"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="post" className="block text-gray-700 font-bold mb-2">Post</label>
                <input
                    type="text"
                    id="post"
                    name="post"
                    value={formData.post}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Post"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="degree" className="block text-gray-700 font-bold mb-2">Degree</label>
                <input
                    type="text"
                    id="degree"
                    name="degree"
                    value={formData.degree}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Degree"
                />
            </div>
            <div className="flex justify-center">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    
                >
                    Add Doctor
                </button>
            </div>
        </form>
    </div>
  )
}
