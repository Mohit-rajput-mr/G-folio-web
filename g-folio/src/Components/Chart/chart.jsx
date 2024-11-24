import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import "./chart.css";

const Chart = ({ accountValue, setAccountValue }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const updateChart = () => {
            const intervalTime = Math.random() * 8400 + 1200;
            const timeoutId = setTimeout(() => {
                const fluctuation = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 455.4);
                const updatedValue = Math.max(1000, accountValue + fluctuation);
                setAccountValue(updatedValue);
                const newEntry = { value: updatedValue, time: new Date().toLocaleTimeString() };
                setData(currentData => [...currentData, newEntry].slice(-20));
            }, intervalTime);
            return () => clearTimeout(timeoutId);
        };

        updateChart(); 
        // Clean up the interval when component unmounts or accountValue changes
        return () => clearTimeout(updateChart);
    }, [accountValue, setAccountValue]);

    return (
        <div className="chart-area">
            <ResponsiveContainer width="85%" height="100%" className="chart-container"> {/* Height ko adjust kiya */}
                <AreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#ccc" strokeDasharray="none" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorValue)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
