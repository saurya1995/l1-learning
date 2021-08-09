
import React from "react";

const Pricing = () => <section className="bg-gray-100 py-8">
    <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Pricing
        </h1>
        <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
            <div
                className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
                <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                    <div className="p-8 text-3xl font-bold text-center border-b-4">
                        Free
                    </div>
                    <ul className="w-full text-center text-sm">
                        <li className="border-b py-4">Insights for you and your team</li>
                        <li className="border-b py-4">Non-commercial use only</li>
                        <li className="border-b py-4">Max 5 developers per team</li>
                    </ul>
                </div>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                    <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                        $0
                    </div>
                </div>
            </div>
            <div
                className="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">
                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                    <div className="w-full p-8 text-3xl font-bold text-center">Pro</div>
                    <ul className="w-full text-center text-base font-bold">
                        <li className="border-b py-4">Features included in the free version</li>
                        <li className="border-b py-4">+ No Developer Limit</li>
                        <li className="border-b py-4">+ 24/7 Support</li>
                        <li className="border-b py-4">99.9% SLA</li>
                    </ul>
                </div>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                    <div className="w-full pt-6 text-4xl font-bold text-center">
                        $.99
                        <span className="text-base">/ per user</span>
                    </div>
                </div>
            </div>
            <div
                className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
                <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                    <div className="p-8 text-3xl font-bold text-center border-b-4">
                        Enterprise
                    </div>
                    <ul className="w-full text-center text-sm">
                        <li className="border-b py-4">Features included in pro version</li>
                        <li className="border-b py-4">+ Commercial Use</li>
                        <li className="border-b py-4">+ Enhanced Access Log</li>
                    </ul>
                </div>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                    <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                        $1.99
                        <span className="text-base">/ per user</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

export default Pricing