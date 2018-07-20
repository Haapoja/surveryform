import React from "react";
import {  Form } from "react-bootstrap";
import "./index.css";

import Info from "./surveyForm/info";
import Check from "./surveyForm/checkbox";
import Select from "./surveyForm/selectbox";
import Comment from "./surveyForm/comment";

const Survey = () => {

    return (
        <div>
            <Form horizontal>
                <Info />
                <Check />
                <Select />
                <Comment />
            </Form>
        </div>

    )
}




export default Survey;