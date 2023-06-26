import { Line } from "react-chartjs-2";
import { Chart } from "react-google-charts";
import React, { Component } from 'react';



function Graph() {
    const data = [
        ["Year", "Performance"],
        ["2004", 1000],
        ["2005", 1170],
        ["2006", 660],
        ["2007", 1030],
    ];

    const options = {
        title: "Performance",
        curveType: "function",
        legend: { position: "bottom" },
    };
    return (
        <div>
            <Chart
                chartType="LineChart"
                width="100%"
                height="200px"
                data={data}
                options={options}
            />
        </div>
    );
}
export default Graph;
