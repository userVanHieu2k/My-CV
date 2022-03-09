import { AiOutlineCloudDownload } from 'react-icons/ai'
import { WiUmbrella } from 'react-icons/wi'
import { GiTrophyCup, GiSelfLove } from 'react-icons/gi'
const skill = () => {
    return (
        <>
            <div class="card-box">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="section-title">
                            <h2>skills</h2>
                            <div class="title-border"></div>
                            <p>
                                Knowledge of HTML,CSS,JS and know the basics of ReactJS.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-sm-3">
                        <div className="box" >
                            <div className="skill">
                                <div class="outer">
                                    <div class="inner">
                                        <div id="number">80%</div>
                                    </div>
                                </div>

                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                    <defs>
                                        <linearGradient id="GradientColor">
                                            <stop offset="0%" stop-color="#e91e63" />
                                            <stop offset="100%" stop-color="#673ab7" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                                </svg>

                            </div><br />
                        </div>
                        <h4>HTML</h4>
                    </div>
                    <div className="col-sm-3">
                        <div className="box1">
                            <div className="skill">
                                <div class="outer">
                                    <div class="inner">
                                        <div id="number">70%</div>
                                    </div>
                                </div>

                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                    <defs>
                                        <linearGradient id="GradientColor">
                                            <stop offset="0%" stop-color="#e91e63" />
                                            <stop offset="100%" stop-color="#673ab7" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                                </svg>

                            </div><br />
                        </div>
                        <h4>CSS</h4>
                    </div>
                    <div className="col-sm-3">
                        <div className="box2">
                            <div className="skill">
                                <div class="outer">
                                    <div class="inner">
                                        <div id="number">50%</div>
                                    </div>
                                </div>

                                <svg width="160px" height="160px">
                                    <defs>
                                        <linearGradient id="GradientColor">
                                            <stop offset="0%" stop-color="#e91e63" />
                                            <stop offset="100%" stop-color="#673ab7" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                                </svg>

                            </div><br />
                        </div>
                        <h4>JS</h4>
                    </div>
                    <div className="col-sm-3">
                        <div className="box3">
                            <div className="skill">
                                <div class="outer">
                                    <div class="inner">
                                        <div id="number">20%</div>
                                    </div>
                                </div>

                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                    <defs>
                                        <linearGradient id="GradientColor">
                                            <stop offset="0%" stop-color="#e91e63" />
                                            <stop offset="100%" stop-color="#673ab7" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                                </svg>

                            </div><br />
                        </div>
                        <h4>ReactJS</h4>

                    </div>
                </div>
            </div>
        </>
    );
};
export default skill;
