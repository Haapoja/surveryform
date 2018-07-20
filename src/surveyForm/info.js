import React from "react";
import { FormGroup, FormControl, Form } from "react-bootstrap";

const Info = () =>(
    <Form horizontal>
    <FormGroup className="name" >


    <p className="name1">Name:</p> <FormControl
        placeholder="enter name">
    </FormControl>

</FormGroup>


<FormGroup className="email">
    <p className="email1"> Email:</p><FormControl
        placeholder="enter email">
    </FormControl>
</FormGroup>


<FormGroup className="age">
    <p className="age1"> Age:<span className="invisible">3</span></p> <FormControl
        placeholder="enter age">
    </FormControl>
</FormGroup>
</Form>
)


export default Info;