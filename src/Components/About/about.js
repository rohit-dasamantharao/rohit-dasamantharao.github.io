
import { Image,Card,Flip,Divider } from 'tiny-ui'
import 'tiny-ui/dist/styles/index.css';
import './about.css'
import { IN } from 'country-flag-icons/react/3x2'
import TechUsed from '../TechUsed/TechUsed';
import { Link } from '@mui/material';


function about() {
  return (
    <>
        <div>
        <Image className="profilepic" src="/profilepic.png"/>
        <div style={{height:200,lineHeight:1.5}}>
        
            <h2 style={{ margin: 0 }}>Rohit D</h2>
            <i>Automation Research & Development Engineer</i><br/>
            Indian <IN width={16}/>
        </div>
        </div>
            <Divider align="center">Works</Divider>
            <Flip width={350} height={350} style={{margin:15}}>
            <Flip.Item>
                <Image width={335} height={250} src="https://raw.githubusercontent.com/rohit-dasamantharao/Ease-Homepage/master/homepage.PNG"/>
            </Flip.Item>
            <Flip.Item className='flipitemback'>
                <div style={{padding:10,paddingBottom:0}}>
                    Customized homepage for the browser which helps to quickly acess your important websites in the browser and comes with a basic features such as
                    <ol>
                        <li>Grouping the important websites to respective categories.</li>
                        <li>Change the Search engine just with a click</li>
                        <li>Easy accessibility to the commonly used sites</li>
                    </ol>
                </div>
                <Divider align='center'>Tech Used</Divider>
                <center>
                <TechUsed.Javascript/><TechUsed.Html/><TechUsed.Css/>
                </center>
                <Divider align='center'>Quick Links</Divider>
                <center>
                <Link style={{ textDecoration: 'none', color: 'black' }} target="_blank" href='https://github.com/rohit-dasamantharao/Ease-Homepage'><TechUsed.Github/></Link>
                </center>
                
            </Flip.Item>
            </Flip>
    </>
  );
}

export default about;
