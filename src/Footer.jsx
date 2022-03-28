
import React from "react";

function Footer(props){
    return(
        <div>
            <footer className="footer-section">
                <button onClick={props.onClick} className="footer-btn">Load More?</button>
                
                <hr />
                
                <h5 className="footer-txt1"> Coded by <a href="https://twitter.com/yuricodesbot" target="_blank">Yuricodesbot</a></h5>
                <h6 className="footer-txt2">Photos by <a href="https://github.com/nasa/apod-api#getting_started">Nasa </a></h6>
            </footer>
        </div>
    )
}
export default Footer;