import { Menu,Image,Tooltip } from 'tiny-ui'
import 'tiny-ui/dist/styles/index.css';
import './TechUsed.css'
import { SiJavascript, SiCss3, SiHtml5, SiGithub } from "react-icons/si";

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

  export default {"Javascript":Javascript,"Html":Html,"Css":Css,"Sql":Sql,"Csharp":Csharp,"Github":Github}
