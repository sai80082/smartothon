import React from 'react';
import './style.css';

function Progress() {
    const percentage = 85;
    const radius = 45;
    const strokeWidth = 10;
    const normalizedRadius = radius - strokeWidth * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className=" w-[273px] h-[330px] text-3xs text-light-primary">
            <b className="text-xl">Completion Progress</b>
            <div className="cards">
                <div className="card red">
                    <div className="w-[219.26px] h-[58.26px] flex justify-around justify-items-center items-center">
                        <div className="flex flex-col  items-start">
                            <span className="text-[18px] font-bold">Life Contingency</span>
                            <span className="text-[10px] text-white">Chapter 3</span>
                        </div>
                        <span className='text-[15px]'>85%</span>
                    </div>
                </div>
                <div className="card blue">
                    <div className="w-[219.26px] h-[58.26px] flex justify-around justify-items-center items-center">
                        <div className="flex flex-col  items-start">
                            <span className="text-[18px] font-bold">Life Contingency</span>
                            <span className="text-[10px] text-white">Chapter 3</span>
                        </div>
                        <span className='text-[15px]'>85%</span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Progress;
