function Banner() {
    return (
        <div className=" w-[736px] h-[175px] text-light-selected bg-royalblue rounded-xl flex ">
            <div className="flex flex-col pl-11 pt-11">
                <div className=" w-[366px] h-[53px] text-[35px]">
                    <b className=" tracking-[-0.03em] inline-block w-[322px] h-[53px]">
                        Welcome back, Ayo
                    </b>
                    <img
                        className="w-[38px] h-[38px] object-cover"
                        alt=""
                        src="/image-296@2x.png"
                    />
                </div>
                <div className=" whitespace-pre-wrap">
                    <p className="m-0">
                        <span className="font-open-sans">{`You’ve learned `}</span>
                        <b className="font-open-sans">{`70% `}</b>
                        <span> of your goal this week!</span>
                    </p>
                    <p className="m-0">Keep it up and improve your progeress.</p>
                </div>
            </div>
            <img
                className=" top-0 w-[338px] h-[203.08px] object-cover"
                alt=""
                src="/humaaans-space@2x.png"
            />
        </div>
    );
}
export default Banner;
