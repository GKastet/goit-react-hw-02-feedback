import PropTypes from "prop-types";
import { StatisticsStyled } from "./StatisticsStyled";

function Statistics({good, neutral, bad, total, positivePercentage}) {
    //console.log(good, neutral, bad);
    return(
        <StatisticsStyled>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total()}</p>
            <p>Positive feedback: {Math.round(positivePercentage())}%</p>
        </StatisticsStyled>
    )
}


Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired

}
export default Statistics;