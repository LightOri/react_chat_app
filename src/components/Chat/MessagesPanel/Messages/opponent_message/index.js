import React from 'react';
import './opponent_message.css';

class OpponentMessage extends React.Component {
  render() {
  	const message = this.props.message;
    const formattedMessage = transformMessages(message);

    function transformMessages(data) {
        const messageData = data;
        if (typeof messageData === 'string') {
            return messageData;
        } else if (messageData.msg){
          return messageData.msg;
        }else {
            return "wrong message format"
        }
    }
    const hours = new Date(this.props.time);
    const formattedHours = hours.getHours();
    const minutes = new Date(this.props.time);
    const formattedMinutes = minutes.getMinutes();

    return (
    	<div className="message">
			<div className="message__icon-opponent round-user-icon"></div>
			<div className="message__text">
				{formattedMessage}
				<div className="message__time">{formattedHours}:{formattedMinutes}</div>
			</div>
		</div>
    );
  }
}

export default OpponentMessage;