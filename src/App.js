/* eslint-disable no-undef */
/* eslint-disable import/no-named-as-default */
import React from 'react';
// import ReactDOM from 'react-dom';
// import ClockList from './components/ClockList';
// import Form from './components/Form';
// import Calculator from './components/Calculator';
// import Text from './components/inheritance/Text';
// import Emoji from './components/composition/Emoji';
// // eslint-disable-next-line import/no-named-as-default-member
// import Bracket from './components/composition/Bracket';
// import Text from './components/composition/Text';
import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import User from './components/User';
import Counter from './components/Counter';
import Section from './components/Section';

// function App() {
// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
    // const quantities = [1, 2, 3];
    state = {
        theme: 'dark',
    };

    render() {
        const { theme } = this.state;
        return (
            <div className="App">
                {/* <ClockList quantities={quantities} /> */}
                {/* <Form /> */}
                {/* <Calculator /> */}
                {/* Hi! Hozaifa. */}
                {/* <Emoji>{({ addEmoji }) => <Text addEmoji={addEmoji} />}</Emoji> */}
                {/* <Emoji>
                {' '}
                <Bracket>
                    {({ addEmoji }) => <Text addEmoji={addEmoji} addBracket={addBracket} />}
                </Bracket>
            </Emoji> */}
                {/* Hi! Hozaifa. */}
                {/* <br /> */}
                {/* <ClickCounter />
            <HoverCounter /> */}
                {/* <User render={(isLoggedIn) => (isLoggedIn ? 'Hozaifa' : 'Unknown')} /> */}
                {/* <Counter
                render={(counter, incrementCount) => (
                    <ClickCounter count={counter} incrementCount={incrementCount} />
                )}
            />
            <Counter
                render={(counter, incrementCount) => (
                    <HoverCounter count={counter} incrementCount={incrementCount} />
                )}
            /> */}
                <Counter>
                    {(counter, incrementCount) => (
                        <ClickCounter count={counter} incrementCount={incrementCount} />
                    )}
                </Counter>
                {/* <Counter>
                {(counter, incrementCount) => (
                    <HoverCounter count={counter} incrementCount={incrementCount} />
                )}
            </Counter> */}
                <Section theme={theme} />
            </div>
        );
    }
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
// export default App;
