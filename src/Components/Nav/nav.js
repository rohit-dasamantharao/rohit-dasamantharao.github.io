
import { Menu,Image } from 'tiny-ui'
import 'tiny-ui/dist/styles/index.css';
import './nav.css'

function nav() {
  return (
    <>
    <Menu>
      <Menu.Item>Rohit Dasamantharao</Menu.Item>
      <Menu.Divider style={{"color":"red"}}></Menu.Divider>
    </Menu>
    </>
  );
}

export default nav;
