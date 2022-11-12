import { Menu,Image,Tooltip } from 'tiny-ui'
import 'tiny-ui/dist/styles/index.css';
import './TechUsed.css'
import { SiJavascript, SiCss3, SiHtml5, SiGithub, SiTypescript } from "react-icons/si";
import {DiNodejs} from "react-icons/di"

const Javascript = ()=> {
  return (
    <Tooltip title="JavaScript"><span><SiJavascript class="Javascript"/></span></Tooltip>
  );
}
const Html = ()=>{
    return (
        <Tooltip title="HTML 5"><span><SiHtml5 class="Html"/></span></Tooltip>
    );
}
const Css = () => {
    return (
        <Tooltip title="CSS 3"><span><SiCss3 class="Css"/></span></Tooltip>
    );
}
const Sql = () => {
    return (
      <></>
    );
}
const Csharp = () => {
    return (
      <></>
    );
  }
  const Github = () => {
    return (
        <SiGithub fontSize={28}/>
    );
  }
  const Nodejs = () =>{
    return(<Tooltip title="NodeJs"><span><DiNodejs className='Nodejs'/></span></Tooltip>);
  }
  const TypeScript = ()=>{
    return(<Tooltip title="TypeScript"><span><SiTypescript className='Typescript'/></span></Tooltip>)
  }

  export default {"Javascript":Javascript,"Html":Html,"Css":Css,"Sql":Sql,"Csharp":Csharp,"Github":Github,"Nodejs":Nodejs,"TypeScript":TypeScript}
