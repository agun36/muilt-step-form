import React from "react"
import thanks from "../assets/images/icon-thank-you.svg"

export const Step5Page  = () => {


    return (
        <form>
            <div className="content d-flex justify-content-center mt-6  text-center">
                <div className="card card-content border-0  py-5 px-3 d-flex gap-4  align-items-center justify-content-center  text-center  ">
                    <img src={thanks} alt="thank you" className="img-fluid w-25 h-25 " />
                    <div className="content-title">
                        <h1 className="text-marine-blue">Thank you!</h1>
                        <p className="text-cool-gray">Thanks for confirming your subcription! We hope you have fun using our platform. if you ever need support. please feel free to emmail us at support@loremgaming.com. </p>
                    </div>
                </div>
            </div>
        </form>

    )
}
