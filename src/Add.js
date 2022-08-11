import React from 'react';

class Add extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mya : 0
        };
    }

    changeContent(){
        this.setState({
            mya: this.state.mya + 1
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

export default Add;