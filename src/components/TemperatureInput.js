import React from 'react';
// import BoilingVerdict from './BoilingVerdict';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit',
};
// export default class TemperatureInput extends React.Component {
export default function TemperatureInput({ temperature, scale, onTemperatureChange }) {
    // const { temperature, scale, onTemperatureChange } = this.props;
    return (
        <>
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input
                    type="text"
                    value={temperature}
                    onChange={(e) => onTemperatureChange(e, scale)}
                />
            </fieldset>
            {/* <BoilingVerdict celsius={parseFloat(temperature)} /> */}
        </>
    );
}

// state = {
//     temperature: '',
// };

// onTemperatureChange = (e) => {
//     this.setState({ temperature: e.target.value });
// };

//     render() {
//         // const { temperature } = this.state;
//         const { temperature, scale, onTemperatureChange } = this.props;
//         return (
//             <>
//                 <fieldset>
//                     <legend>Enter temperature in {scaleNames[scale]}:</legend>
//                     <input type="text" value={temperature} onChange={onTemperatureChange} />
//                 </fieldset>
//                 {/* <BoilingVerdict celsius={parseFloat(temperature)} /> */}
//             </>
//         );
//     }
// }
