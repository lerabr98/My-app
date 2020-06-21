import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    let path = "/dialog/" + props.id;
    return (
        <div className="dialog + '' + active">
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;