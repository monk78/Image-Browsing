/**
 * @Author: monk
 * @Date:   2019-07-01T23:57:14+05:30
 * @Filename: app.js
 * @Last modified by:   monk
 * @Last modified time: 2019-07-04T16:35:47+05:30
 */
import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './searchbar.js';
import ImageList from './ImageList';

 class App extends React.Component {
   state={ images:[] };
    onSearchSubmit= async term=> {
     const response=await unsplash.get('/search/photos',{
        params:{query:term},
     });

     this.setState({images:response.data.results});
     //console.log(response.data.results);
    //this.props.onSubmit(this.state.term);
   }
   render(){
      return(
        <div className="ui container  " style={{marginTop:'10px'}}>
        <SearchBar SubmitBar={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
        </div>
          );
       }

 }
 export default App;
