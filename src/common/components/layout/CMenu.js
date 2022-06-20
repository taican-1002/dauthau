import { List } from '@mui/material'
import React from 'react'
import CListItem from './CListItem'
import { Link } from "react-router-dom";

import {Layers as LayersIcon} from '@mui/icons-material';

const listItems = [
    {text: 'Bằng cấp', icon: LayersIcon, route: '/degree'},
    {text: 'Chứng chỉ', icon: LayersIcon, route: '/certificate'},
    {text: 'Tài chính', icon: LayersIcon, route: '/finance'},
    {text: 'Tài sản', icon: LayersIcon, route: '/asset'},
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
                <Link key = {index} to={`${item.route}`}>
                    <CListItem
                        text = {item.text}
                        open = {props.open}
                        index = {index}
                        selectedIndex = {selectedIndex}
                        handleListItemClick = {handleListItemClick}
                    >
                        <item.icon/>
                    </CListItem>
                </Link>
            ))
        }
    </List>
  )
}

export default CMenu