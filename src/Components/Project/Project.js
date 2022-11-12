import { Card,Divider } from 'tiny-ui'
import TechUsed from '../TechUsed/TechUsed';
import { Link } from '@mui/material';
import 'tiny-ui/dist/styles/index.css';
import './Project.css'

function Project({projname,desc,techused,gitlink,libandframe}) {
  return (
    <>
        <Card className='card'>
            <Card.Content>
                <h4>{projname}</h4>
                <Divider align="center"></Divider>
                {desc}
                <Divider align='center'>Tech Used</Divider>
                <center>
                {techused}
                </center>
                <Divider align='center'>Quick Links</Divider>
                <center>
                <Link style={{ textDecoration: 'none', color: 'black' }} target="_blank" href={gitlink}><TechUsed.Github/></Link>
                </center>
                
                {
                    libandframe !=null ?
                    <>
                        <Divider align='center'>Libraries and Frameworks</Divider>
                        <center>
                        {libandframe}
                        </center>
                    </>
                    :<></>
                }
            </Card.Content>
            </Card>
    </>
  );
}

export default Project;
