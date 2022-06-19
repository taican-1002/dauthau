import { List } from '@mui/material'
import React from 'react'
import CListItem from './CListItem'

import {Layers as LayersIcon} from '@mui/icons-material';

const listItems = [
    {text: 'Bằng cấp', icon: LayersIcon},
    {text: 'Chứng chỉ', icon: LayersIcon},
    {text: 'Tài chính', icon: LayersIcon},
    {text: 'Tài sản', icon: LayersIcon},
]

function CMenu(props) {

    const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
      console.log(index)
    setSelectedIndex(index);
  };

    return (
        <List 
            id='list-menu'
            className = 'list-menu'
            component="nav"
            aria-label="main mailbox folders"
        >
        {
            listItems.map((item, index)=>(
                <CListItem
                    key = {index}
                    text = {item.text}
                    open = {props.open}
                    index = {index}
                    selectedIndex = {selectedIndex}
                    handleListItemClick = {handleListItemClick}
                >
                    <item.icon/>
                </CListItem>
            ))
        }
    </List>
  )
}

export default CMenu