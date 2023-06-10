import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

class Clock extends React.Component {
    state = { date: new Date(0, 1), locale: 'bn-BD' };
    // constructor(props) {
    //     super(props);
    //     this.state = { date: new Date() };
    //     this.handleClick = this.handleClick.bind(this);
    // }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    // handleClick = () => {
    //     this.setState({ locale: 'en-US' });
    //     // console.log('the button was clicked');
    // };
    handleClick = (locale) => {
        this.setState({ locale });
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        const { date, locale } = this.state;
        // const { locale } = this.props;
        // let button;
        // if (locale === 'bn-BD') {
        //     button = (
        //         <Button change={this.handleClick} locale="en-US">
        //             {' '}
        //             click here
        //         </Button>
        //     );
        // } else {
        //     button = (
        //         <Button change={this.handleClick} locale="bn-BD">
        //             {' '}
        //             click here
        //         </Button>
        //     );
        // }
        return (
            <>
                <div>
                    <h2>It is {date.toLocaleTimeString(locale)}.</h2>
                </div>
                {locale === 'bn-BD' ? (
                    <Button change={this.handleClick} locale="en-US" show={false} enable={false} />
                ) : (
                    <Button change={this.handleClick} locale="bn-BD" show enable />
                )}
                {/* {button} */}
                {/* <Button change={() => this.handleClick('en-US')}> click here</Button> */}
                {/* <button onClick={() => this.handleClick('en-US')}> click here</button> */}
            </>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />);

export default Clock;
