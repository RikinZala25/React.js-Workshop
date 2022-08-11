import React from 'react';

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mya : "Rikin"
        };
    }

    changeContent(){
        this.setState({
            mya:"Zala"
        });
    }

    render(){
        return(
            <div>
                Value is {this.state.mya}
                <button onClick={this.changeContent.bind(this)}>Click Me</button>
            </div>
        );
    }

}

export default Counter;