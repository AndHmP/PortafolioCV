import react from "react";

import '../../Style/Components/100DiasCss/Dia06.css'

export default function Dia06() {

    return (
        <div className="Dia06 flex align-items-center justify-content-center">
            <div className="cardD06">
                <div className="principal flex flex-column align-items-center justify-content-center">
                    <div className="imgUser">
                        <img src="https://100dayscss.com/codepen/jessica-potter.jpg" alt="" />
                    </div>
                    <span className="nameUser">Jessica Potter</span>
                    <span className="job">Visual Artist</span>

                    <button>Follow</button>
                    <button>Message</button>
                </div>


                <div className="subSecc flex flex-column align-items-center justify-content-center">
                    <span>523</span>
                    <span>Posts</span>
                </div>
                <div className="subSecc flex flex-column align-items-center justify-content-center">
                    <span>1387</span>
                    <span>Likes</span>
                </div>
                <div className="subSecc flex flex-column align-items-center justify-content-center">
                    <span>146</span>
                    <span>Follower</span>
                </div>
            </div>
        </div>
    )
}