import React from 'react';

class Searchbar extends React.Component {
    
    state = { term: '' };

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
        
    };

    render() {
        return (
            <div className="search-bar ui segment" style={{ marginTop: '1em' }}>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Youtube Lite</label>
                        <div className="ui left icon input">
                            <input type="text" 
                            value={this.state.term} 
                            onChange={this.onInputChange}
                            placeholder="Type something you like"
                            />
                            <i className="search icon"></i>
                        </div>
                        
                    </div>
                </form>
            </div>
        );
    }
}

export default Searchbar;