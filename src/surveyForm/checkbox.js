import React from "react";
import { FormGroup,  Checkbox } from "react-bootstrap";

const Check = () => (
    <div>

        <FormGroup className="">
            <p className="check1">How likely is that you would recommend<br></br> freeCodeCamp to a friend? </p>
            <div className="check">
                <Checkbox >
                    Definetly
                    </Checkbox>
                <Checkbox>
                    Maybe
                    </Checkbox>
                <Checkbox>
                    no chance
                   </Checkbox>
            </div>
        </FormGroup>

        <FormGroup className="">
            <p className="improve">Things that should be improved in the future<br></br> (Check all that apply) </p>
            <div className="improve1">
                <Checkbox >
                    Front-end Projects
                    </Checkbox>
                <Checkbox>
                    Back-end Projects
                    </Checkbox>
                <Checkbox>
                    Data Visualization
                   </Checkbox>
                <Checkbox >
                    Challenges
                    </Checkbox>
                <Checkbox>
                    Open Source Community
                    </Checkbox>
                <Checkbox>
                    Gitter help rooms
                   </Checkbox>
                <Checkbox >
                    Videos
                    </Checkbox>
                <Checkbox>
                    City Meetups
                    </Checkbox>
                <Checkbox>
                    Wiki
                   </Checkbox>
                <Checkbox>
                    Forum
                    </Checkbox>
                <Checkbox>
                    Additional Courses
                   </Checkbox>
            </div>
        </FormGroup>



    </div>

)

export default Check;