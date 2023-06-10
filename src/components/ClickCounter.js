import React from 'react';

// import withCounter from './HOC/withCounter';

// eslint-disable-next-line react/prefer-stateless-function
// class ClickCounter extends React.Component {
//     state = {
//         count: 0,
//     };

//     incrementCount = () => {
//         this.setState((prevState) => ({ count: prevState.count + 1 }));
//     };

//     render() {
//     const { count } = this.state;
//     return (
//         <div>
//             <button type="button" onClick={this.incrementCount}>
//                 Clicked {count} times
//             </button>
//         </div>
//     );
// }
// }
// export default ClickCounter;

// const ClickCounter =(props)=>{
// function ClickCounter(props) {
//     const { count, incrementCount } = props;
//     return (
//         <div>
//             <button type="button" onClick={incrementCount}>
//                 Clicked {count} times
//             </button>
//         </div>
//     );
// }
// export default withCounter(ClickCounter);
// export default class ClickCounter extends React.Component {
// state = {
//     count: 0,
// };

// incrementCount = () => {
//     this.setState((prevState) => ({ count: prevState.count + 1 }));
// };
export default function ClickCounter(count, incrementCount) {
    // render() {
    // const { count } = this.state;
    // const { count, incrementCount } = this.state;
    return (
        <div>
            <button type="button" onClick={incrementCount}>
                Clicked {count} times
            </button>
        </div>
    );
}

// export default ClickCounter;
