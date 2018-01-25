import React, {PropTypes} from 'react';

export default class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pos: false,
            merchant: false,
            receiver: false,

            orgnr: false,
            country: false,

            address: false,
            zip: false,

            companyName: false,
            purpose: false,
            companyType: false,

            email: false,
            password: false,
            password2: false,

            checkbox: false,

            value: '',
            suggestions: []
        };
    }


    render() {

        const activatedForm = this.props.activatedForm;

        return (

            <form action="#" className={activatedForm ? "register-form" : "register-form-hidden"}
                  onSubmit={(e) => {

                      if(this.state.pos){

                          this.props.onSignup(
                            'pos',
                            document.getElementById('orgNr').value,
                            document.getElementById('country').value,
                            document.getElementById('companyName').value,
                            document.getElementById('address').value,
                            document.getElementById('zipCode').value,
                            document.getElementById('password').value,
                            document.getElementById('emailInput').value
                          );
                          e.preventDefault();

                      } else if (this.state.merchant) {

                      } else if (this.state.receiver) {

                      }


                      }}>

                <h2 className="register-title">Register</h2>


                <div>

                    <div className="input-row">

                        {/* TYPE OF CLIENT */}
                        {this.state.pos ?

                            <button
                                className="edit-button"
                                onClick={(e) => {
                                    this.setState({
                                        pos: false
                                    });
                                    e.preventDefault();
                                }}
                            >POS</button>
                            :
                            this.state.merchant ?

                                <button
                                    className="edit-button"
                                    onClick={(e) => {
                                    this.setState({
                                        merchant: false
                                    });
                                    e.preventDefault();
                                }}
                                >Merchant</button>
                                :
                                this.state.receiver ?

                                    <button
                                        className="edit-button"
                                        onClick={(e) => {
                                        this.setState({
                                            receiver: false
                                        });
                                        e.preventDefault();
                                    }}
                                    >Receipt receiver</button>
                                    :
                                    <div>
                                        {/* CHOOSE TYPE OF CLIENT */}
                                        <div className="row-row">
                                            <p>Choose your client type</p>
                                        </div>

                                        <button
                                            className="green-button"
                                            onClick={(e) => {
                                        this.setState({
                                            pos: true
                                        });
                                        e.preventDefault();
                                    }}>
                                            POS
                                        </button>

                                        <button
                                            className="green-button"
                                            onClick={(e) => {
                                        this.setState({
                                            merchant: true
                                        });
                                        e.preventDefault();
                                    }}>
                                            Merchant
                                        </button>

                                        <button
                                            className="green-button"
                                            onClick={(e) => {
                                        this.setState({
                                            receiver: true
                                        });
                                        e.preventDefault();
                                    }}>
                                            Receipt receiver
                                        </button>

                                    </div>
                        }

                        {/* ORG.NR. AND COUNTRY */}
                        {this.state.pos || this.state.merchant || this.state.receiver ?
                            <div>
                                <input
                                    type="text"
                                    placeholder="Org. Nr."
                                    id="orgNr"
                                    onChange={(e) => {
                                        this.setState({
                                        orgnr: true
                                    });
                                    e.preventDefault();
                                    }}
                                />

                                <input
                                    type="text"
                                    placeholder="Country"
                                    id="country"
                                    onChange={(e) => {
                                        this.setState({
                                        country: true
                                    });
                                    e.preventDefault();
                                    }}
                                />
                            </div>
                            :
                            <div></div>
                        }
                    </div>


                    {/* SECOND ROW */}
                    <div
                        className={this.state.orgnr && this.state.country && (this.state.pos || this.state.merchant || this.state.receiver) ? "input-row" : 'input-row-hidden'}>

                        <input
                            type="text"
                            placeholder="Name of company"
                            id="companyName"
                            onChange={(e) => {
                                this.setState({
                                    companyName: true
                                });
                                    e.preventDefault();
                            }}
                        />

                        <input
                            type="text"
                            placeholder="Company address"
                            id="address"
                            onChange={(e) => {
                                this.setState({
                                    address: true
                                });
                                    e.preventDefault();
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Zip code"
                            id="zipCode"
                            onChange={(e) => {
                                this.setState({
                                    zip: true
                                });
                                    e.preventDefault();
                            }}
                        />

                        <div className="terms-check" onClick={(e) => {
                            if (this.state.checkbox === false) {
                                this.setState({
                                    checkbox: true
                                });
                            } else {
                                this.setState({
                                    checkbox: false
                                });
                            }

                            e.preventDefault();
                        }}>
                            <div className={(this.state.checkbox) ? "checkbox checked" : "checkbox"}></div>
                            <p className="check-text">I've read and I accept the terms of conditions</p>
                        </div>

                    </div>


                    {/* THIRD ROW */}
                    <div
                        className={this.state.companyName && this.state.address && this.state.zip && this.state.checkbox ? "input-row" : 'input-row-hidden'}>

                        <div className="input-row">

                            <input
                                type="email"
                                placeholder="Email"
                                id="emailInput"
                                onChange={(e) => {
                                    this.setState({
                                        email: true
                                    });
                                        e.preventDefault();
                                }}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                id="password"
                                onChange={(e) => {
                                    this.setState({
                                        password: true
                                    });
                                        e.preventDefault();
                                }}
                            />
                            <input
                                type="password"
                                placeholder="Repeat password"
                                id="repeatedPassword"
                                onChange={(e) => {
                                    this.setState({
                                        password2: true
                                    });
                                        e.preventDefault();
                                }}
                            />

                            {this.state.orgnr && this.state.country && this.state.zip
                            && this.state.companyName && this.state.address && this.state.email
                            && this.state.password && this.state.password2 && this.state.checkbox ?
                                <button className="green-button"> Register </button>
                                :
                                <button className="white-button" onClick={(e) => {
                                 e.preventDefault();
                                }}> Register </button>
                            }
                        </div>
                    </div>
                </div>
            </form>


        );
    }
}
