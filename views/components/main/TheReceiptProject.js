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
const Plant = require('-!babel-loader!svg-react-loader!./../../img/plant.svg?name=Icon');
const Efficiency = require('-!babel-loader!svg-react-loader!./../../img/efficiency.svg?name=Icon');
const Money = require('-!babel-loader!svg-react-loader!./../../img/money.svg?name=Icon');

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
                            Take part in the journey of finding the best possible solution of reducing
                            socioeconomic and environmental problems associated with paper recipts.
                        </p>

                        <p className="OngoingProjects">
                            Ongoing Projects
                        </p>
                        <div className="bedrifter">
                            <a href="https://fiken.no" target="_blank" className="bedrift"><img src={fiken}/></a>
                            <a href="https://www.ebby.no" target="_blank" className="bedrift"><img src={ebby}/></a>
                            <a href="https://payr.no" target="_blank" className="bedrift"><img src={payr}/></a>
                            <a href="http://www.globalblue.com" target="_blank" className="bedrift"><img src={globalblue}/></a>
                            <a href="https://aispot.no" target="_blank" className="bedrift"><img src={aispot}/></a>
                            <a href="https://24sevenoffice.com/no/" target="_blank" className="bedrift"><img src={sevenoffice}/></a>
                            <a href="https://www.visma.no" target="_blank" className="bedrift"><img src={visma}/></a>
                            <a href="https://www.bankbridge.io" target="_blank" className="bedrift"><img src={bankbridge}/></a>

                            
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
                                    <Money className='idea'/>
                                    <p>Zeipt is solving socioeconomic challenges by creating seamless distribution of financial data from the users shopping habits to user-interfaces giving financial advices.</p>
                                </TabPanel>
                                <TabPanel>
                                    <Plant className='idea'/>
                                    <p>Estimnated 600 000 trees, 60 000 000 liters of oil and 305 000 000 liters of water was used for creating all receipts in Scandinavia in 2014. Zeipt wishes to eliminate this resource usage.</p>
                                </TabPanel>
                                <TabPanel>
                                    <Efficiency className='idea'/>
                                    <p>Handling paper receipts are often known to be very inefficient. Zeipt automates the process of handling the data on the receipts for systems such as accounting and other financial services.</p>
                                </TabPanel>
                            </div>
                        </Tabs>
                    </div>
                </div>
                <div className="interested">
                        <MyModal></MyModal>
                    </div>
            </div>

        );
    }
}
