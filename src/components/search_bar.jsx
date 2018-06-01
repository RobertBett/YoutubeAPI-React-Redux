import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);

        this.state ={ term:''};
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearch(term)

    }

    render(){
        return(
            <div className="search-bar">
            < input 
                placeholder="Search..."
                value= {this.state.term}
                onChange={ event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
}

export default SearchBar;