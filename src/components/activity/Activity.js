function Activity() {
    return (
        <div className="relative text-center text-6xl text-light-selected flex flex-col mt-8">
            <div className="flex justify-around align-middle justify-self-center justify-items-center mb-5">
                <span className="text-xl text-light-primary">
                    Upcoming Activities
                </span>
                <span className="text-smi text-royalblue">
                    See all
                </span>
            </div>
            <div className="flex flex-col gap-2">
                <div className="h-[100px] bg-lavenderblush rounded-xl flex justify-evenly align-middle items-center">
                    <div className=" w-[50px] h-[50px] rounded-[50%] bg-deeppink">
                        13
                    </div>
                    <div className=" h-[58px] text-left text-3xs text-gray flex flex-col">
                        <span className="  text-mini text-light-primary">
                            Social Insurance Test
                        </span>
                        <span >
                            School Hall, University Road, Lagos State
                        </span>
                        <div >
                            <b>13th July 2021</b>
                            <br></br>
                            <b>{`8 A.M - 9 A.M `}</b>
                        </div>
                    </div>
                    <img
                        className=" w-3 h-3"
                        alt=""
                        src="/icon--chevron-left1.svg"
                    />
                </div>
                <div className="h-[100px] bg-honeydew rounded-xl flex justify-evenly align-middle items-center">
                    <div className=" w-[50px] h-[50px] rounded-[50%] bg-limegreen">
                        13
                    </div>
                    <div className=" h-[58px] text-left text-3xs text-gray flex flex-col">
                        <span className="  text-mini text-light-primary">
                            Social Insurance Test
                        </span>
                        <span >
                            School Hall, University Road, Lagos State
                        </span>
                        <div >
                            <b>13th July 2021</b>
                            <br></br>
                            <b>{`8 A.M - 9 A.M `}</b>
                        </div>
                    </div>
                    <img
                        className=" w-3 h-3"
                        alt=""
                        src="/icon--chevron-left1.svg"
                    />
                </div>
            </div>





        </div>
    );
}
export default Activity;
