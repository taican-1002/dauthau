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

    return (
        <List className = 'list-menu'>
        {
            listItems.map((item, index)=>(
                <CListItem
                    key = {index}
                    text = {item.text}
                    open = {props.open}
                >
                    <item.icon/>
                </CListItem>
            ))
        }
    </List>
  )
}

export default CMenu