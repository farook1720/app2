import React, { useState } from 'react'
import { Menu, Segment, ActiveItem } from 'semantic-ui-react'


export default function MainMenu() {

  const [ActiveItem, setitem] = useState('home')

  const handleItemClick = (e, { name }) => {
    setitem(name);
  }


  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item
          name='home'
          active={ActiveItem === 'home'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='messages'
          active={ActiveItem === 'messages'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='friends'
          active={ActiveItem === 'friends'}
          onClick={handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            active={ActiveItem === 'logout'}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu>

      <Segment>
        <img src='/images/wireframe/media-paragraph.png' />
      </Segment>
    </div>
  )
}
