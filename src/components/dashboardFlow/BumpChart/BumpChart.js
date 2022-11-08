import { Bump } from '@nivo/bump'
import range from 'lodash/range'
import shuffle from 'lodash/shuffle'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.


const generateData = () => {
    const years = range(2000, 2005)
    const ranks = range(1, 7)

    const series = ranks.map(rank => {
        return {
            id: `Serie ${rank}`,
            data: [],
        }
    })

    years.forEach(year => {
        shuffle(ranks).forEach((rank, i) => {
            series[i].data.push({
                x: year,
                y: rank,
                extra: Math.random(),
            })
        })
    })

    return series
}

const commonProps = {
    width: 375,
    height: 250,
    margin: { top: 40, right: 90, bottom: 40, left: 25 },
    // data: generateData(),
}

const BumpChart = ({ lineData /* see data tab */ }) => {

    return (
        <div className='chart-container'>
            <Bump
            {...commonProps}
            data={generateData()}
            className='chart'
            />
        </div>
    )
}

export default BumpChart;