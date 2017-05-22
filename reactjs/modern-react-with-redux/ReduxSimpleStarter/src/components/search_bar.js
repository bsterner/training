import React, {Component} from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);

        // Only place we do this.state = ... is in constructor
        this.state = {term: 'Starting value'};
    }

    render() {
        return (
            <div>
                {/* Controlled component's value is set by state */}
                <input value={this.state.term}
                       onChange={event => this.setState({term: event.target.value})}/>
            </div>
        );
    }

}

export default SearchBar;