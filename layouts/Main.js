import Navbar from '../components/Navbar';
import Head from 'next/head';
import styled from 'styled-components';


const Header = styled.header`
position:fixed;
top:0;
left:0;
width:100%;

z-index:2;
`
const Body = styled.div`
display:block;


margin: 10rem 2rem 2 rem 2rem;

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
            
           
            </div>);
}

export default Layout;