import React from "react";
import "./modelcontent.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
function Modelcontent() {
  return (
    <div className="model-dialog">
      <div className="model-content">
        <div className="model-content-header">
          <Button className="icon-button2">
            <CloseIcon color="black"/>
          </Button>
        </div>
        <div className="model-content-line"/>
        <div className="model-content-body">
          <p>
            Your Estimated Monthly Expenses at age 60 after retirement will be
            <span className="span1">₹1016</span>
          </p>
          <p>
            It’s Easy to understand that your monthly expenses will be
            <span className="span2">3808%</span>
            higher than your current monthly expenses.
          </p>
          <p>
            It’s tough to manage your post retirement expenses, as your salary
            or income generally reduces drastically after retirement. So you
            have to plan your retirement well in advance.
          </p>
          <p>
            Planning your retirement is not a child’s play, it took years of
            planning and execution.
          </p>
          <p>
            Without proper guidance in creating retirement corpus, one can land
            up in a financial trouble at retirement age.
          </p>
          <p>
            To find out “HOW LONG YOUR RETIREMENT CORPUS CAN SUPPORT YOUR FAMILY
            AFTER YOUR RETIREMENT” please click here.
          </p>
          <p>
            Ofcourse, we need quite a few information about your earnings,
            expenses, investments and perception on financial planning, don’t
            worry, your data is safe and will not be share it with any third
            party, it’s our promise.
          </p>
          <p>
            So let’s go and “CHECK THAT YOUR PLANNING ON RETIRMENT CORPUS IS IN
            THE RIGHT DIRECTION OR NOT” please
            <span className="span3">
              Already have an account?
              <span className="span4">click here.</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modelcontent;
