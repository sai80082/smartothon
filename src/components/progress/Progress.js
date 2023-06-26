function Progress() {
    return (
        <div className="absolute top-[313px] left-[755px] w-[273px] h-[330px] text-3xs text-light-primary">
            <div className="absolute top-[0px] left-[0px] rounded-xl bg-light-selected w-[273px] h-[330px]" />
            <b className="absolute top-[20px] left-[20px] text-mini">
                Completion Progress
            </b>
            <div className="absolute top-[48px] left-[20px] w-[219.26px] h-[58.26px]">
                <b className="absolute top-[13px] left-[0px] text-mini">{`Life Contingency `}</b>
                <b className="absolute top-[33px] left-[0px] text-gray">Chapter 3</b>
                <div className="absolute top-[0px] left-[161px] w-[58.26px] h-[58.26px]">
                    <img
                        className="absolute top-[0px] left-[0px] w-[58.26px] h-[58.26px]"
                        alt=""
                        src="/group-18.svg"
                    />
                    <b className="absolute top-[22px] left-[19px]">75%</b>
                </div>
            </div>
            <div className="absolute top-[116px] left-[20px] w-[219.26px] h-[58.26px]">
                <b className="absolute top-[12px] left-[0px] text-mini">
                    Social Insurance
                </b>
                <b className="absolute top-[32px] left-[0px] text-gray">Chapter 4</b>
                <div className="absolute top-[0px] left-[161px] w-[58.26px] h-[58.26px]">
                    <img
                        className="absolute top-[0px] left-[0px] w-[58.26px] h-[58.26px]"
                        alt=""
                        src="/group-19.svg"
                    />
                    <b className="absolute top-[22px] left-[19px]">91%</b>
                </div>
            </div>
            <div className="absolute top-[185px] left-[20px] w-[219.26px] h-[58.26px]">
                <b className="absolute top-[10px] left-[0px] text-mini">
                    Advanced Maths.
                </b>
                <b className="absolute top-[30px] left-[0px] text-gray">Module 2</b>
                <div className="absolute top-[0px] left-[161px] w-[58.26px] h-[58.26px]">
                    <img
                        className="absolute top-[0px] left-[0px] w-[58.26px] h-[58.26px]"
                        alt=""
                        src="/group-20.svg"
                    />
                    <b className="absolute top-[22px] left-[19px]">25%</b>
                </div>
            </div>
            <div className="absolute top-[253px] left-[20px] w-[219.26px] h-[58.26px]">
                <b className="absolute top-[9px] left-[0px] text-mini">Pension</b>
                <b className="absolute top-[29px] left-[0px] text-gray">Chapter 5</b>
                <div className="absolute top-[0px] left-[161px] w-[58.26px] h-[58.26px]">
                    <img
                        className="absolute top-[0px] left-[0px] w-[58.26px] h-[58.26px]"
                        alt=""
                        src="/group-21.svg"
                    />
                    <b className="absolute top-[22px] left-[19px]">97%</b>
                </div>
            </div>
            <div className="absolute top-[54px] left-[252px] w-[5px] h-[251px]">
                <div className="absolute top-[0px] left-[0px] rounded-31xl bg-whitesmoke w-[5px] h-[251px]" />
                <div className="absolute top-[46px] left-[0px] rounded-31xl bg-royalblue w-[5px] h-[84px]" />
            </div>
        </div>
    );
}
export default Progress;
