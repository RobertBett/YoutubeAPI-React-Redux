import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBhkgYtcpip9T80NPzYv1K93L4VVVgtUKU';


class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {videos:[]}

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos)=>{
            this.setState({ videos});
       });
    }

    render(){
        return (
            <div>
                < SearchBar />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
