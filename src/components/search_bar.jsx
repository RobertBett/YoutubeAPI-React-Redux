import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);

        this.state ={ term:'whatup'};
    }



    render(){
        return(
            <div>
            < input 
                value= {this.state.term}
                onChange={ event => this.setState({term:event.target.value})} />
            <h1>{this.state.term}</h1>
            </div>
        );
    }
}

export default SearchBar;