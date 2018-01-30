import React from 'react';
import NavigationBar from './NavigationBar.js';
import BackgroundAnimation from './BackgroundAnimation.js';
import TheReciptProject from './TheReciptProject.js';
const Dude = require('-!babel-loader!svg-react-loader!./../../img/dude.svg?name=Icon');

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            emailName: '',
            email: '',
            activateInput: false,
            emailValidated: false,
            confirmedEmail: false
        }
        this.onEmailChange = this
            .onEmailChange
            .bind(this);
        this.onEmailConfirmed = this
            .onEmailConfirmed
            .bind(this);
    }

    componentDidMount() {
        console.log(this.props.props);
    }

    onEmailChange(e) {
        var emailinput = e.target.value;

        var emailname = emailinput.substr(0, emailinput.indexOf('@'));

        this.setState({emailName: emailname, email: emailinput});
        this.validateEmail(emailinput);
    }

    validateEmail(emailInput) {
        const validated = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailInput);
        if (validated) {
            this.setState({emailValidated: true})
        } else {
            this.setState({emailValidated: false})
        }
    }

    onEmailConfirmed() {
        console.log('HAPPENED BEFORE')
        setTimeout(function () {
            console.log('HAPPENED')
            this.setState({confirmedEmail: false})
        }.bind(this), 4000)
    }

    render() {
        const props = this.props.props;
        const actions = this.props.actions;
        return (
            <div>
                <div className='main'>

                    <div className="front">
                        <NavigationBar/>

                        <div className="bottom">
                            {(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))
                                ? <div
                                        className={this.state.activatedForm || this.state.confirmedEmail
                                        ? "hidden"
                                        : "visible"}>
                                        <h1 className="front-title">DO RECEIPTS BETTER</h1>
                                        <p className="front-text">
                                            Zeipt is bridging the gap between physical and digital,
                                            <br/>
                                            by creating an open eco-system for digital receipt distribution.
                                        </p>
                                    </div>
                                : <div className="visible">
                                    <h1 className="front-title">DO RECEIPTS BETTER</h1>
                                    <p className="front-text">
                                        Zeipt is bridging the gap between physical and digital,
                                        <br/>
                                        by creating an open eco-system for digital receipt distribution.
                                    </p>
                                </div>
}

                            {this.state.confirmedEmail
                                ? <div className="alertbox-visible">
                                        <Dude className='dude'/>
                                        <div className='arrow visible'></div>
                                        <div className='alert alert-success'>
                                            Thanks {this.state.emailName}
                                            for subscribing!
                                        </div>
                                    </div>
                                : <div className="alertbox-hidden">
                                    <Dude className='dude'/>
                                    <div className='arrow visible'></div>
                                    <div className='alert alert-success'>
                                        Thanks {this.state.emailName}
                                        for subscribing!
                                    </div>
                                </div>
}

                            {this.state.emailValidated
                                ? <button
                                        className='button white-button'
                                        onClick=
                                        { (e) => { actions.onSignup( document.getElementById('emailinput').value ); this.onEmailConfirmed(), this.setState({ activatedForm: false, email: '', emailValidated: false, confirmedEmail: true }); e.preventDefault(); } }>
                                        Confirm
                                    </button>
                                : <button
                                    onClick={() => {
                                    this.state.activatedForm
                                        ? this.setState({activatedForm: false})
                                        : this.setState({activatedForm: true})
                                }}
                                    className="right-arrow-btn">
                                    Keep me updated
                                </button>
}

                            <form>
                                <input
                                    id='emailinput'
                                    type='text'
                                    placeholder='Your email'
                                    className={this.state.activatedForm
                                    ? 'input appear'
                                    : 'input'}
                                    value={this.state.email}
                                    required
                                    onChange={this.onEmailChange}/>
                            </form>
                        </div>
                    </div>
                    <BackgroundAnimation className='backgroundAnimation'/>
                </div>
                <TheReciptProject className= "TheReciptProject"/>
            </div>
        )
    }
}