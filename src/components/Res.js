import React from 'react'
import { useMediaQuery } from 'react-responsive'


import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionOneMobile from "./SectionOneMobile";
import SectionTwoMobile from "./SectionTwoMobile";
import LandingOne from "./LandingOne";
import LandingOneMobile from "./LandingOneMobile";




const Responsive = () => {


    const isBigScreen = useMediaQuery({ query: '(min-width: 767px)' })


    return (
        <div>
            {isBigScreen ?
                <div>
                    <SectionOne />
                    <SectionTwo/>
                </div>



                :


                <div>
                    <SectionOneMobile/>
                    <SectionTwoMobile/>
                </div>
            }
        </div>
    )
}



export default Responsive