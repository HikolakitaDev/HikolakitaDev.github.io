
import "./award.css";
import Award1 from "../assets/award1.png";
import Award2 from "../assets/award2.png";

function Award() {
    return (
        <div className="award-container">
            <div className="award">
                <img src={Award1} alt="React" className='award-logo' />
                <h3 className="award-name">Coze AI Challenge</h3>
                <p className="award-description">Coze AI Challenge introdcuced by devTo, in which my team won first place with an innovative bot to help tourists prepare their trips.</p>
            </div>
            <div className="line-container">
                <div className="dotted-line"></div>
            </div>
            <div className="award">
                <img src={Award2} alt="React" className='award-logo' />
                <h3 className="award-name">Web Game Challenge</h3>
                <p className="award-description">A Web Game Challenge I won for writting an interesting explainer about Event Listeners in less than 256 characters (hosted by devTo, again).</p>
            </div>
            <div className="line-container">
                <div className="dotted-line"></div>
                <p className="award-description" id="andMore">... and hopefully more coming!</p>
            </div>
        
        </div>
    );
}

export default Award;