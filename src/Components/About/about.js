
import { Image,Divider } from 'tiny-ui'
import 'tiny-ui/dist/styles/index.css';
import './about.css'
import { IN } from 'country-flag-icons/react/3x2'
import TechUsed from '../TechUsed/TechUsed';
import Project from '../Project/Project';

function about() {
  return (
    <>
        <Image className="profilepic" src="/profilepic.png"/>
        <div style={{height:170,lineHeight:1.5}}>
        
            <h2 style={{ margin: 0 }}>Rohit D</h2>
            <i>Automation Research & Development Engineer</i><br/>
            Indian <IN width={16}/>
        </div>
            <Divider align="center" style={{fontSize:18}}>WORKS</Divider>
        <div>
            <Project
                projname="Ease HomePage" 
                desc={
                    <div style={{margin:10,paddingBottom:0}}>
                        Customized homepage for the browser which helps to quickly acess your important websites in the browser and comes with a basic features such as
                        <ol>
                            <li>Grouping the important websites to respective categories.</li>
                            <li>Change the Search engine just with a click</li>
                            <li>Easy accessibility to the commonly used sites</li>
                        </ol>
                    </div>}
                techused={<><TechUsed.Javascript/><TechUsed.Html/><TechUsed.Css/></>}
                
                gitlink="https://github.com/rohit-dasamantharao/Ease-Homepage"
            />
            <Project
                projname="QMME" 
                desc={
                    <div style={{margin:10,paddingBottom:0}}>
                        QMME (Quick Multi Media Editor) Major aim is Editing all multimedia on web quickly and effiently on web
                    </div>}
                techused={<><TechUsed.Javascript/><TechUsed.Html/><TechUsed.Css/></>}
                libandothers="Fabric.js"
                gitlink="https://github.com/rohit-dasamantharao/Ease-Homepage"
            />
        </div>
    </>
  );
}

export default about;
