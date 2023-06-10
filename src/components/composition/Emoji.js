import React from 'react';

export default class Emoji extends React.Component {
    // eslint-disable-next-line class-methods-use-this
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

    // render(override) {
    //     let text = 'I am the Emoji Component';
    //     if (override) text = override;
    //     return <div>{text}</div>;
    // }
    render() {
        // eslint-disable-next-line react/destructuring-assignment
        return this.props.children({ addEmoji: this.addEmoji });
    }
}
