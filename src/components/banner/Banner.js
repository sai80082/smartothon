function Banner() {
    return (
        <div className="text-light-selected bg-royalblue rounded-xl flex justify-between w-full">
            <div className="flex flex-col pl-11 pt-11">
                <div className=" lg:h-[53px] text-xl">
                    <b >
                        Welcome back, Ayo
                    </b>
                    <img
                        className=" h-[38px] object-cover"
                        alt=""
                        src="/image-296@2x.png"
                    />
                </div>
                <div className=" ">
                    <p className="m-0">
                        <span className="font-open-sans">{`You’ve learned `}</span>
                        <b className="font-open-sans">{`70% `}</b>
                        <span> of your goal this week!</span>
                    </p>
                    <p className="m-0">Keep it up and improve your progeress.</p>
                </div>
            </div>
            <img
                className="lg:h-[203.08px] h-[100px] object-cover"
                alt=""
                src="/humaaans-space@2x.png"
            />
        </div>
    );
}
export default Banner;
