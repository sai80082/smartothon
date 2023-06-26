import React, { useState } from 'react';

function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className={`w-[270px] h-[1024px] text-xl ${collapsed ? 'collapsed' : ''}`}>
            <div
                className={`absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-11xl rounded-br-11xl rounded-bl-none bg-light-selected w-[270px] h-[1024px]`}
            />

            <div className="absolute top-[200px] left-[0px] w-[270px] h-[61px] text-royalblue">
                <div className="  w-[270px] h-[1024px] text-xl">
                    <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-11xl rounded-br-11xl rounded-bl-none bg-light-selected w-[270px] h-[1024px]" />

                    <div className="absolute top-[200px] left-[0px] w-[270px] h-[61px] text-royalblue">
                        <div className="absolute top-[0px] left-[0px] bg-aliceblue w-[270px] h-[61px]" />
                        <div className="absolute top-[0px] left-[0px] bg-royalblue w-1.5 h-[61px]" />
                        <div className="absolute top-[17px] left-[80px] w-[95px] h-[27px]">
                            <b className="absolute top-[0px] left-[35px]">Home</b>
                            <img
                                className="absolute h-[97.47%] w-[26.32%] top-[0%] right-[73.68%] bottom-[2.53%] left-[0%] max-w-full overflow-hidden max-h-full"
                                alt=""
                                src="/iconlyboldhome.svg"
                            />
                        </div>
                    </div>
                    <div className="absolute top-[299px] left-[80px] w-[109px] h-[27px]">
                        <div className="absolute top-[0px] left-[36px] w-[73px] h-[27px]">
                            <b className="absolute top-[0px] left-[0px]">Classes</b>
                        </div>
                        <img
                            className="absolute h-[84.52%] w-[27.15%] top-[11.11%] right-[72.85%] bottom-[4.36%] left-[0%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/iconlylight-outline3-user.svg"
                        />
                    </div>
                    <a href="https://example.com">
                        <div className="absolute top-[381px] left-[80px] w-[149px] h-[27.4px]">
                            <b className="absolute top-[0px] left-[35px]">Documents</b>
                            <img
                                className="absolute h-full w-[16.78%] top-[0%] right-[83.22%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                                alt=""
                                src="/iconlylight-outlinedocument1.svg"
                            />
                        </div>
                    </a>

                    <a href="/code">
                        <div className="absolute top-[465px] left-[80px] w-[147.69px] h-[27.4px]">
                            <b className="absolute top-[0.4px] left-[33.69px]">Code</b>
                            <img
                                className="absolute h-[99.96%] w-[15.16%] top-[0%] right-[84.84%] bottom-[0.04%] left-[0%] max-w-full overflow-hidden max-h-full"
                                alt=""
                                src="/iconlylight-outlinebookmark.svg"
                            />
                        </div>
                    </a>

                    <div className="absolute top-[549px] left-[80px] w-[171px] h-[27px]">
                        <b className="absolute top-[0px] left-[36.98px]">Messages</b>
                        <img
                            className="absolute h-[99.92%] w-[15.78%] top-[0%] right-[84.22%] bottom-[0.08%] left-[0%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/iconlylight-outlinechat.svg"
                        />
                        <div className="absolute top-[3px] left-[149px] w-[22px] h-[22px] text-[15.56px] text-light-selected">
                            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-royalblue w-[22px] h-[22px]" />
                            <b className="absolute top-[0px] left-[6px] inline-block w-[9.33px] h-[21px]">
                                4
                            </b>
                        </div>
                    </div>
                    <div className="absolute top-[631px] left-[80px] w-[115px] h-[27px]">
                        <b className="absolute top-[0px] left-[34px]">Settings</b>
                        <img
                            className="absolute h-[95.51%] w-[20.87%] top-[3.7%] right-[79.13%] bottom-[0.79%] left-[0%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/iconlylight-outlinesetting.svg"
                        />
                    </div>
                    <div className="absolute top-[942px] left-[80px] w-[119px] h-[27px] text-indianred">
                        <b className="absolute top-[0px] left-[34px]">Sign Out</b>
                        <img
                            className="absolute h-[86.56%] w-[20.17%] top-[7.41%] right-[79.83%] bottom-[6.03%] left-[0%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/iconlylight-outlinelogout.svg"
                        />
                    </div>
                </div>
            </div>

            {/* Toggle button */}
            <button
                className="absolute top-[100px] right-[10px] bg-gray-200 rounded-md px-2 py-1"
                onClick={toggleSidebar}
            >
                {collapsed ? 'Expand' : 'Collapse'}
            </button>
        </div>
    );
}

export default Sidebar;
