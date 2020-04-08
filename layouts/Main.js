import Navbar from '../components/Navbar';
import Head from 'next/head';
import styled from 'styled-components';
import Foot from '../components/Footer';

const Header = styled.header`
position:fixed;
top:0;
left:0;
width:100%;

z-index:2;
`
const Body = styled.div`
display:block;
margin: 2rem;

@media screen and (max-width:955px){
    display:flex;
    flex-direction:column;
    align-items:center;
  }
`

const Footer = styled.footer`

min-height: 50px;
background-color:#3F51B5 !important;
max-width:100vw;
`

const Layout = ({children})=>{

    return (<div>
            <Head>
                <title>Profile Viewer</title>
            </Head>
            <Header><Navbar /></Header>  
            <main>
            <Body>{children}</Body>   
            </main>       
            
           <Footer ><Foot/></Footer>
            </div>);
}

export default Layout;