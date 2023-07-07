import PropTypes from "prop-types";
import { Section } from "./ButtonsStyled";

function Buttons({good, neutral, bad, onGoodBtnClick, onNeutralBtnClick, onBadBtnClick}){    
    return(
        <Section>
            <h2>Please leave feedback</h2>
            <div>
            <button onClick={()=>onGoodBtnClick(good)}>Good</button>
            <button onClick={()=>onNeutralBtnClick(neutral)}>Neutral</button>
            <button onClick={()=>onBadBtnClick(bad)}>Bad</button>
            </div>
            <h2>Statistics</h2>
        </Section>
    )
}

Buttons.propTypes={
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    onGoodBtnClick: PropTypes.func.isRequired,
    onNeutralBtnClick: PropTypes.func.isRequired,
    onBadBtnClick: PropTypes.func.isRequired
}

export default Buttons;