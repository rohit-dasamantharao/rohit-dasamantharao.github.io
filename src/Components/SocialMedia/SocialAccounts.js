import {SiGithub,SiHackerearth,SiCodechef,SiLinkedin} from 'react-icons/si';
import './SocialAccounts.css';
import { Link } from 'tiny-ui';
const icon = {
    fontSize:20,
    margin:4
}

const SocialAccounts = ()=><>
    
    
    
    
    <Link style={{ textDecoration: 'none', color: 'black' }} target="_blank" href={"https://github.com/rohit-dasamantharao"}><SiGithub style={{...icon}}/></Link>
    <Link style={{ textDecoration: 'none', color: 'black' }} target="_blank" href={"https://www.linkedin.com/in/rohit-dasamantharao-477406207/"}>
        <SiLinkedin style={{...icon,color:"#0077b5",backgroundColor:"white"}}/>
    </Link>
    <Link style={{ textDecoration: 'none', color: 'black' }} target="_blank" href={"https://www.hackerearth.com/@dasamantharao"}>
        <SiHackerearth style={{...icon,color:"#2c3454",backgroundColor:"white"}}/>
    </Link>
    <Link style={{ textDecoration: 'none', color: 'black' }} target="_blank" href={"https://www.codechef.com/users/dd_rohit"}>
        <SiCodechef style={{...icon,color:"#733a17",backgroundColor:"white"}}/>
    </Link>
</>

export default SocialAccounts;