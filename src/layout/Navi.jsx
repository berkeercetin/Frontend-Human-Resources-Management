import React, { Component } from 'react'
import { Menu,Button,Container} from 'semantic-ui-react'
import UserMenu from './UserMenu'

export default function Navi() {
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
