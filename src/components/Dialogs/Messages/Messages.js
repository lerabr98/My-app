import React from "react";
const Message = (props) => {
    return (
        <div>
            <div className="message">
                {props.message}
            </div>
            <div>
                <div><textarea /*onChange={onPostChange}  value={props.newMessageText}*//></div>
                <div><button type="button"/*onClick={newMessage}*/>Send</button></div>
            </div>
        </div>
    )
}
export default Message;