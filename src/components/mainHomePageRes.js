import React from 'react'
import { useMediaQuery } from 'react-responsive'
import LandingOne from "./LandingOne";
import LandingOneMobile from "./LandingOneMobile";




const Responsive2 = () => {


    const isBigScreen = useMediaQuery({ query: '(min-width: 767px)' })


    return (
        <div>
            {isBigScreen ?
                <div>

                    <LandingOne/>
                </div>



                :


                <div>
                    <LandingOneMobile/>
                </div>
            }
        </div>
    )
}



export default Responsive2