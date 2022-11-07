import React from 'react';
import { Line } from '@nivo/line'

const commonProps = {
    width: 375,
    height: 250,
    // margin: { top: 40, right: 25, bottom: 40, left: 25 },
    // data: generateData(),
}

const LineChart = ({ lineData /* see data tab */ }) => {

    return (
        <div className='chart-container'>
            <Line
                {...commonProps}
                data={[
                    {
                        id: 'fake corp. A',
                        data: [
                            { x: 0, y: 7 },
                            { x: 1, y: 5 },
                            { x: 2, y: 11 },
                            { x: 3, y: 12 },
                            { x: 4, y: 13 },
                            { x: 5, y: null },
                            { x: 6, y: 18 },
                            { x: 7, y: 16 },
                            { x: 8, y: 8 },
                            { x: 9, y: 10 },
                            { x: 10, y: 9 },
                        ],
                    },
                    {
                        id: 'fake corp. B',
                        data: [
                            { x: 3, y: 14 },
                            { x: 4, y: 16 },
                            { x: 5, y: 19 },
                            { x: 6, y: 20 },
                            { x: 7, y: 18 },
                        ],
                    },
                ]}
                xScale={{
                    type: 'linear',
                    min: 0,
                    max: 'auto',
                }}
                yScale={{
                    type: 'linear',
                    stacked: false,
                }}
                curve="monotoneX"
                style={{ display: 'flex', justifyContent: 'center' }}
            />
        </div>
    );
}

export default LineChart;