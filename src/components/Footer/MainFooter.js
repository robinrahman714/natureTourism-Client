import React from 'react'
import Brand from '../Form/Brand'

const MainFooter = () => {

    return (
        <div className="flex pb-8">
            {/* logo  */}
            <div className="flex flex-grow">
                <Brand />
            </div>
        </div>
    )
}

export default MainFooter
