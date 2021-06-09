import React from 'react'
import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>
             <Menu>
        <Menu.Item
          name='editorials'
          
        >
          Editorials
        </Menu.Item>

        <Menu.Item
          name='reviews'
         
        >
          Reviews
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'
          
        >
          Upcoming Events
        </Menu.Item>
      </Menu>
        </div>
    )
}
