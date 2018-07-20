import React from "react";
import { FormGroup, FormControl} from "react-bootstrap";

const Select = () => (
    <div>
        <FormGroup className="select">
            <p className="select1"> Which option best describes your current role?<span className="invisible">3</span></p> <FormControl
                componentClass="select"
                placeholder="select">
                <option>Student</option>
                <option>Full time job</option>
                <option>Full time learner</option>
                <option>Prefer not to say</option>
                <option>other</option>
                <option>Homeless junkie</option>
            </FormControl>
        </FormGroup>


        <FormGroup className="like">
            <p className="like1"> what do you like most in FCC?</p> <FormControl
                componentClass="select"
                placeholder="select">
                <option>Community</option>
                <option>Projects</option>
                <option>Challenges</option>
                <option>Open source</option>

            </FormControl>
        </FormGroup>


    </div>


)


export default Select;