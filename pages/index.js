import React, {Component} from 'react';
import Layout from '../layouts/Main';
import Pagination from '../components/Pagination';
import AllProfiles from '../components/Profile/AllProfiles';
import {getProfiles} from '../api/api';



class Profiles extends Component{
    
    static async getInitialProps({ query={page: 1, seed:''} }){
       console.log(query);
        const res = await getProfiles(query.page, query.seed);
        const data = await res.json();
        return {profiles:data.results, seed: data.info.seed, page: data.info.page}
    }
   
    
    render(){
        const {seed, page} = this.props;
       
        return(
      <Layout>
        
          <AllProfiles {...this.props}/>
          <Pagination seed={seed} page={page} />
          
      </Layout>)
    }
}
export default Profiles;