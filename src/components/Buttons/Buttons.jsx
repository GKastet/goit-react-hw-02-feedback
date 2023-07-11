import PropTypes from "prop-types";
import { Section } from "./ButtonsStyled";

function Buttons({ onBtnClick}){    
    return(
        <Section>
            <h2>Please leave feedback</h2>
            <div>                                    
            <button name = 'good' onClick={onBtnClick}>Good</button>
            <button name = 'neutral' onClick={onBtnClick}>Neutral</button>
            <button name = 'bad' onClick={onBtnClick}>Bad</button>
            </div>
            <h2>Statistics</h2>
        </Section>
    )
}

Buttons.propTypes={
    onBtnClick: PropTypes.func.isRequired,    
}

export default Buttons;