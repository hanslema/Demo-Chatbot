import React from "react";
//import { AiOutlineClose } from "react-icons/ai";
//import { RxHamburgerMenu } from "react-icons/rx";

const home = () => {
    return (
        
        <div className="flex w-full justify-center items-center">
            <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col mf:mr-10">
                    <h1 className="text-4xl font-bold text-gray-800">Welcome to <span className="text-blue-500">Flex</span> Chat</h1>
                    <p className="text-gray-600 mt-2">This is a simple customer service platform for Flex clients</p>
                </div>
            </div>
        </div>          
    )
}
export default home;
