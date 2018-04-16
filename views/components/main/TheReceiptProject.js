import React from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import MyModal from './MyModal';

import fiken from './../../img/fiken.png';
import ebby from './../../img/ebby.png';
import payr from './../../img/payr.png';
import globalblue from './../../img/globalblue.png';
import aispot from './../../img/aispot.png';
import sevenoffice from './../../img/sevenoffice.png';
import visma from './../../img/visma.png';
import bankbridge from './../../img/bankbridge.png';
import bsmart from './../../img/bsmart.png';
const Idea = require('-!babel-loader!svg-react-loader!./../../img/idea.svg?name=Icon');

export default class TheReceiptProject extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }
    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (

            <div className="thereceiptproject">
                <p className="title">THERECEIPTPROJECT</p>

                <div className="hoveddiv">

                    <div className="venstreDiv">
                        <p>
                            Take part of the journey of finding the best possible solution of reducing
                            socioeconomic and environmental problems associated with paper recipts.
                        </p>

                        <p className="OngoingProjects">
                            Ongoing Projects
                        </p>
                        <div className="bedrifter">
                            <MyModal company={fiken}>Fiken</MyModal>
                            <MyModal company={ebby}>Ebbt</MyModal>
                            <MyModal company={payr}>Payr</MyModal>
                            <MyModal company={globalblue}>Global Blue</MyModal>
                            <MyModal company={aispot}>AI Spot</MyModal>
                            <MyModal company={sevenoffice}>24SevenOffice</MyModal>
                            <MyModal company={visma}>Visma</MyModal>
                            <MyModal company={bankbridge}>Bankbridge</MyModal>
                            <MyModal company={bsmart}>BSmart</MyModal>
                        </div>

                    </div>
                    <div className="høyrediv">
                        <p>
                            Benefits
                        </p>

                        <Tabs className="benefits">
                            <TabList className="benefitsbuttons">
                                <Tab className="benefitsbutton">Socioeconomic</Tab>
                                <Tab className="benefitsbutton">Environment</Tab>
                                <Tab className="benefitsbutton">Efficiency</Tab>
                            </TabList>
                            <div className="benefitsbox">
                                <TabPanel>
                                    <Idea className='idea'/>
                                    <h2>Any content 1</h2>
                                </TabPanel>
                                <TabPanel>
                                    <h2>Any content 2</h2>
                                </TabPanel>
                                <TabPanel>
                                    <h2>Any content 3</h2>
                                </TabPanel>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>

        );
    }
}
