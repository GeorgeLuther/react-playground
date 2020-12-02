import React from 'react';


class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {count: 0, content: ''}
    }
    componentDidMount() {
        console.log('component did mount')
        this.interval = setInterval(() => {
            let myCount = this.state.count+1
            // console.log(`state count ${myCount}`)
            let myContent = ''
            if (myCount % 2) {
                console.log(`state count ${myCount}`)
                myContent = 'tock'
            } else {
                console.log(`state count ${myCount}`)
                myContent = 'tick'
            }
            if (myCount >= 8) {
                console.log('exploder')
                myContent = 'BOOM!!!'
                clearInterval(this.interval)
            }
            this.setState({
                count: myCount,
                content: myContent
            })
        }, 1000)
    }
    
    render () {
        return (
            <div className='bomb'>
                <p>{this.state.content}</p>
            </div>
        )
    }
}

export default Bomb