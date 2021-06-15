import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignOut({signIn}) {
    return (
        <div>
            <Menu.Item> 
                <Button primary onClick={signIn}> Giris Yap </Button>

                <Button primary style={{marginLeft:"0.5em"}}>Kayıt ol </Button>
            </Menu.Item>

        </div>
    )
}