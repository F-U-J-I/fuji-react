import React from "react";
import {useParams} from "react-router";

export function withParams(Component) {
    return props => <Component {...props} params={useParams()}/>
}