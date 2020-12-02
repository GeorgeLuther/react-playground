import React from 'react';


class HelloWorld extends React.Component {
    
    state = { who: 'world' }
      
    handleButtonClick = (input) => {
    this.setState({ who: input })
    }
    
    render () {
        return (
            <div className='hello'>
                <p>Hello, {this.state.who}!</p>
                
                <button onClick={() => this.handleButtonClick('world')}>World</button>
                <button onClick={() => this.handleButtonClick('friend')}>Friend</button>
                <button onClick={() => this.handleButtonClick('React')}>React</button>
            </div>
        )
    }
}

export default HelloWorld