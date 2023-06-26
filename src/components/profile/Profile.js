function Profile() {
    return (
        <div className="relative w-44 h-12 text-light-primary">
            <div className="top-0 left-0 rounded-lg bg-aliceblue w-full h-full" />
            <div className="top-1 left-3 w-36 h-9">
                <div className="absolute top-0 left-1 rounded-lg bg-royalblue w-11 h-full" />
                <img
                    className="absolute top-0 left-0 rounded-lg w-12 h-full object-cover"
                    alt=""
                    src="/allura-avatar@2x.png"
                />
                <div className="absolute top-3 left-14 tracking-tight font-semibold">
                    Adeola Ayo
                </div>
            </div>
            <img
                className="absolute top-6 right-3 w-3 h-3"
                alt=""
                src="/icon--chevron-left.svg"
            />
        </div>
    );
}

export default Profile;
