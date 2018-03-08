import React, { PropTypes } from 'react'; //importerer react
import fiken from "./../../img/fiken.png"
import ebby from "./../../img/ebby.png"
import payr from "./../../img/payr.png"
import globalblue from "./../../img/globalblue.png"
import aispot from "./../../img/aispot.png"
import sevenoffice from "./../../img/sevenoffice.png"
import visma from "./../../img/visma.png"
import bankbridge from "./../../img/bankbridge.png"
import bsmart from "./../../img/bsmart.png"
export default class Test extends React.Component {
    render() {
        return (
            <div className="thereciptproject">
                <p> THERECIPTPROJECT</p>

                <div className="hoveddiv">

                    <div className="venstreDiv">
                        <p>
                            Take part of the journey of finding the best possible solution of reducing socioeconomic and environmental problems associated with paper recipts.
                        </p>

                        <p className="OngoingProjects"> On Going Projects </p>
                        <div className="bedrifter">
                            <div className="Fiken bedrift">
                                <img src={fiken} />
                            </div>
                            <div className="Ebby bedrift">
                                <img src={ebby} />
                            </div>
                            <div className="Payr bedrift">
                                <img src={payr} />
                            </div>
                            <div className="GlobalBlue bedrift">
                                <img src={globalblue} />
                            </div>
                            <div className="Aispot bedrift">
                                <img src={aispot} />
                            </div>
                            <div className="24Sevenoffice bedrift">
                                <img src={sevenoffice} />
                            </div>
                            <div className="Visma bedrift">
                                <img src={visma} />
                            </div>
                            <div className="Bankbridge bedrift">
                                <img src={bankbridge} />
                            </div>
                            <div className="bsmart bedrift">
                                <img src={bsmart} />
                            </div>
                        </div>

                    </div>
                    <div className="høyrediv">
                        <p> Benefits </p>
                        <div className="benefits">
                            <div className="benefitsbuttons">
                                <div className="benefitsbutton active" id="sosiookonomisk">
                                    <p> Socioeconomic </p>
                                </div>
                                <div className="benefitsbutton" id="envirement">
                                    <p> Environment </p>
                                </div>
                                <div className="benefitsbutton" id="efficiency">
                                    <p> Efficiency </p>
                                </div>
                            </div>
                            <div className="benefitsbox" id="benefitsbox">


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}