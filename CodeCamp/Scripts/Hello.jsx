import React from 'react';

class Hello extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			text: "constructor"
		}
	}

	componentDidMount(){
		this.setState({text: "componentDidMount"});
	}

    render() {
        return <div>{this.state.text}</div>;
    }
}
export default Hello;