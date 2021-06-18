import React from 'react'
import { Menu } from 'semantic-ui-react'


export default function SideBar() {

    return (
        <div>
            <Menu pointing vertical>
                <Menu.Item onClick
                    name='Şehir'
                   
                />
                <Menu.Item
                    name='Dil'
                    
                />
                <Menu.Item
                    name='Destek'
                    
                />
            </Menu>
        </div>
    )
}
