
import { Image,Card,Flip,Divider } from 'tiny-ui'
import 'tiny-ui/dist/styles/index.css';
import './about.css'
import { IN } from 'country-flag-icons/react/3x2'
import { SiJavascript } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";


function about() {
  return (
    <>
        <Card>
        <Image className="profilepic" src="/profilepic.png"/>
        <Card.Content style={{height:200,lineHeight:1.5}}>
        
            <h2 style={{ margin: 0 }}>Rohit D</h2>
            <i>Automation Research & Development Engineer</i><br/>
            Indian <IN width={16}/>
        </Card.Content>
        </Card>
            <Divider align="center">Works</Divider>
            <Flip width={350} height={350} style={{padding:15}}>
            <Flip.Item>
                <Image width={320} height={320} src="https://raw.githubusercontent.com/rohit-dasamantharao/Easy-Homepage/master/homepage.PNG"/>
            </Flip.Item>
            <Flip.Item className='flipitemback'>
                <div style={{padding:10}}>
                Customized homepage for the browser which helps to quickly acess your important websites in the browser and comes with a basic features such as
                <ol>
                    <li>Grouping the important websites to respective categories.</li>
                    <li>Change the Search engine just with a click</li>
                    <li>Easy accessibility to the commonly used sites</li>
                </ol>
                <Divider align='center'>Tech Used</Divider>
                <SiJavascript fontSize={30} color={"yellow"} style={{backgroundColor:"black",padding:-1}}/> <TiHtml5 color={"orange"} fontSize={35}/>
                </div>
            
            </Flip.Item>
            </Flip>
            <Flip width={350} height={350} style={{padding:15}}>
            <Flip.Item>
                <Image width={320} height={320} src="https://raw.githubusercontent.com/rohit-dasamantharao/Easy-Homepage/master/homepage.PNG"/>
            </Flip.Item>
            <Flip.Item className="fipitemback">
            customized Homepage for the browser which is  to quickly acess your important websites in the browser and comes with a basic features such as
            <ol>
                <li>Grouping the important websites to respective category.</li>
                <li>Change the Search engine just with a click</li>
                <li>Easy accessibility to the commonly used sites</li>
            </ol>
            <Divider align='center'>Tech used</Divider>
            </Flip.Item>
            </Flip>
    </>
  );
}

export default about;
