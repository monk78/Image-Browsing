/**
 * @Author: monk
 * @Date:   2019-07-02T00:14:32+05:30
 * @Filename: searchbar.js
 * @Last modified by:   monk
 * @Last modified time: 2019-07-04T12:22:18+05:30
 */
import React from 'react';
class SearchBar extends React.Component{
 state={ term: 'Hi there'};
 onFormSubmit = event => {
   event.preventDefault();
   this.props.SubmitBar(this.state.term);
 }
  render(){
    return (
       <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
          <label>Image Search </label>
           <input  type="text"
           value={this.state.term}
           onChange={(event) => this.setState({term: event.target.value})}
           />
           </div>
        </form>
      </div>

    );
  }
}

export default SearchBar;
