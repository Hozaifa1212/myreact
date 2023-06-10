/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
// export default class HoverCounter extends React.Component {
// state = {
//     count: 0,
// };

// incrementCount = () => {
//     this.setState((prevState) => ({ count: prevState.count + 1 }));
// };
export default function HoverCounter(count, incrementCount, theme) {
    // render() {
    // const { count } = this.state;
    // const { count, incrementCount } = this.state;
    const style = theme === 'dark' ? { backgroundColor: '#000000', color: '#ffffff' } : null;
    return (
        <div>
            <h1 onMouseOver={incrementCount} style={style}>
                Hovered {count} times
            </h1>
        </div>
    );
}

// export default HoverCounter;
