import styled from 'styled-components';
import Profile from './Profile';

const Wrapper = styled.div`
  margin: 1rem;
  padding: 2rem 0;
  max-width: 100%;and 

  
`

const GridContainer = styled.div`
    margin-top:3rem;
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 40px;
    
    
    
    `


const Profiles = ({profiles, seed, page}) =>{

    return(
        <Wrapper>
        <GridContainer>{
            profiles.map((profile, index)=>{
                return(
              <Profile key ={index} profile={profile} seed={seed} page={page}/>
              )
            })}
    </GridContainer>
    </Wrapper>
    )

}

export default Profiles;