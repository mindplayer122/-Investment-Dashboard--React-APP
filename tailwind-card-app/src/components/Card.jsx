import React from "react";

const Card = ({title, description, buttonText, imageUrl}) => {
    return (
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white m-4 hover:shadow-xl transition">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover"/>

            <div className="p-6">
                <h2 className="text-xl font-semibild mb-2">{title}</h2>
                <p className="text-gray-600 mb-4">{description}</p>

                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                    {buttonText}
                </button>
            </div>
        </div>
    )
}