import React from 'react'

const AboutItem = ({ id, image, icon, title, Sprice,description}) => {
    return (
        <div className="bg-white transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl">
            {/* image  */}
            <div className="overflow-hidden rounded-2xl flex flex-grow">
                <img className="transform transition duration-700 hover:scale-125" src={image} alt={title} />
            </div>
            {/* other info  */}
            <div className="flex mt-6 space-x-3 ">
            
                {/* description  */}
                <div className="flex flex-col space-y-3">
                    <h1 className="text-3xl text-gray-800 font-bold ">{title}</h1>
                    <h1 className="text-2xl text-gray-800 font-bold">${Sprice}</h1>
                    <p className="text-sm text-gray-800">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutItem
