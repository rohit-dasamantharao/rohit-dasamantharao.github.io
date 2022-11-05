
import { Image,Card } from 'tiny-ui'
import 'tiny-ui/dist/styles/index.css';
import './about.css'

function about() {
  return (
    <>
        <Card>
        <Image round className="profilepic" src="/profilepic.png"></Image>
        <Card.Content>
            <h2 style={{ margin: 0 }}>Rohit D</h2>
            Automation Research Enginnering
        </Card.Content>
        </Card>
    </>
  );
}

export default about;
