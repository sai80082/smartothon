function Banner() {
    return (
        <div className="absolute left-[292px] w-[744px] h-[203.08px] text-light-selected">
            <div className="absolute top-[0px] left-[0px] rounded-xl bg-royalblue w-[736px] h-[175px]" />
            <img
                className="absolute top-[87px] left-[709px] w-[291px] h-[212px] object-cover hidden"
                alt=""
                src="/cool-kids-avatar@2x.png"
            />
            <img
                className="absolute top-[0px] left-[406px] w-[338px] h-[203.08px] object-cover"
                alt=""
                src="/humaaans-space@2x.png"
            />
            <div className="absolute top-[94px] left-[40px] tracking-[0.02em] leading-[175.68%] whitespace-pre-wrap">
                <p className="m-0">
                    <span className="font-open-sans">{`You’ve learned `}</span>
                    <b className="font-open-sans">{`70% `}</b>
                    <span> of your goal this week!</span>
                </p>
                <p className="m-0">Keep it up and improve your progeress.</p>
            </div>
            <div className="absolute top-[34px] left-[40px] w-[366px] h-[53px] text-[35px]">
                <b className="absolute top-[0px] left-[0px] tracking-[-0.03em] inline-block w-[322px] h-[53px]">
                    Welcome back, Ayo
                </b>
                <img
                    className="absolute top-[7px] left-[328px] w-[38px] h-[38px] object-cover"
                    alt=""
                    src="/image-296@2x.png"
                />
            </div>
        </div>
    );
}
export default Banner;
