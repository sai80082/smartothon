function Profile() {
    return (
        <div className="absolute top-[43px] left-[1209px] w-[182px] h-[50px] text-light-primary">
            <div className="absolute top-[0px] left-[0px] rounded-[10px] bg-aliceblue w-[182px] h-[50px]" />
            <div className="absolute top-[4.86px] left-[13px] w-[134px] h-[40.29px]">
                <div className="absolute top-[0px] left-[2.88px] rounded-[9.59px] bg-royalblue w-[42.2px] h-[40.29px]" />
                <img
                    className="absolute top-[0px] left-[0px] rounded-[9.59px] w-[47px] h-[40.29px] object-cover"
                    alt=""
                    src="/allura-avatar@2x.png"
                />
                <div className="absolute top-[12.14px] left-[57px] tracking-[-0.03em] font-semibold">
                    Adeola Ayo
                </div>
            </div>
            <img
                className="absolute top-[21px] right-[12px] w-3 h-3"
                alt=""
                src="/icon--chevron-left.svg"
            />
        </div>
    );
}
export default Profile;
