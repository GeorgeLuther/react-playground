import React from 'react';


class RouletteGun extends React.Component {
    
    state = { chamber: null, spinningTheChamber: false, content: 'We\'re waiting...' }

    random=function(min, max){  
        min=Math.ceil(min) 
        max=Math.floor(max) 
        return Math.floor(Math.random()*(max-min+1))+min 
    }

    loadAndSpin = () => {
        this.setState({
            chamber : this.random(1,8),
            spinningTheChamber : false
    })      
    }
    delayedFunc = () => {
        this.timeoutID = window.setTimeout(this.loadAndSpin, 2*1000)
        // this.timeoutID = window.setTimeout(window.alert, 2*1000, 'That was really slow!')
    }
    setContent = () => {
        if (this.state.spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger! ...'
        } else if (this.props.bulletInChamber === this.state.chamber) {
            return 'BANG!!!!'
        }
        return 'you\'re safe!'
    }

    handleButtonClick = () => {
        this.setState({ spinningTheChamber: true})
        this.delayedFunc()

    }
    componentWillUnmount() {
        window.clearTimeout(this.timeoutID)
    }

    static defaultProps = {
        bulletInChamber: 8
    }
    
    render () {
        console.log(`myChamber:${this.state.chamber}`)
        return (
            <div className='hello'>
                <p>{this.setContent()}</p>
                
                <button onClick={() => this.handleButtonClick()}>Pull the trigger!</button>
            </div>
        )
    }
}

export default RouletteGun