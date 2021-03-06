import React from 'react'

const BottomFooter = () => {
    return (
        <div className="flex items-center pt-8">
            <div className="flex flex-grow text-lg text-white">
                <span>&#169; Copyright | Nature Tourism 2021</span>
            </div>

            <div className="flex justify-end items-center space-x-6">
                <span className="poppins text-white cursor-pointer">Privacy Policy</span>
                <span className="poppins text-white cursor-pointer">Terms of Use</span>
                <span className="poppins text-white cursor-pointer">Pricing</span>
            </div>
        </div>
    )
}

export default BottomFooter
