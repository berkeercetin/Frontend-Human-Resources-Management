import React,{useState} from 'react'
import { useHistory } from 'react-router'
import { Menu,Button,Container} from 'semantic-ui-react'
import UserMenu from './UserMenu'

export default function Navi() {

  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const history=useHistory()

  function handleSignOut(params) {
      setIsAuthenticated(false)
      history.push("/")
  }

  function handleSignIn(params) {
      setIsAuthenticated(true)
      
  }



  return (
    <div>
       <Menu >
       <Container>
        <Menu.Item
          name='Anasayfa'
          
        />
        <Menu.Item
          name='Firmalar'
          
        />
        <Menu.Item
          name='Adaylar'

        
        />

        <Menu.Item position = "right">          
        <Button primary>Kayıt ol</Button>
          </Menu.Item>

          <Menu.Item>          
          <Button>Giriş</Button>
          </Menu.Item>


        </Container>
      </Menu>
      
    </div>
  )
}
