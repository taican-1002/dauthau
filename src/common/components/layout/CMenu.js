<<<<<<< HEAD
import { List } from "@mui/material";
import React from "react";
import CListItem from "./CListItem";
=======
import { List } from '@mui/material'
import React from 'react'
import CListItem from './CListItem'
import { Link } from "react-router-dom";
>>>>>>> 6a15c59179dfa745e9a22ef358482fcc3d66f381

import { Layers as LayersIcon } from "@mui/icons-material";

const listItems = [
<<<<<<< HEAD
  { text: "Bằng cấp", icon: LayersIcon },
  { text: "Chứng chỉ", icon: LayersIcon },
  { text: "Tài chính", icon: LayersIcon },
  { text: "Tài sản", icon: LayersIcon },
];
=======
    {text: 'Bằng cấp', icon: LayersIcon, route: '/degree'},
    {text: 'Chứng chỉ', icon: LayersIcon, route: '/certificate'},
    {text: 'Tài chính', icon: LayersIcon, route: '/finance'},
    {text: 'Tài sản', icon: LayersIcon, route: '/asset'},
]
>>>>>>> 6a15c59179dfa745e9a22ef358482fcc3d66f381

function CMenu(props) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    console.log(event.target);
    setSelectedIndex(index);
  };

  return (
    <List
      id="list-menu"
      className="list-menu"
      component="nav"
      aria-label="main mailbox folders"
    >
      {listItems.map((item, index) => (
        <CListItem
          key={index}
          text={item.text}
          open={props.open}
          index={index}
          selectedIndex={selectedIndex}
          handleListItemClick={handleListItemClick}
        >
<<<<<<< HEAD
          <item.icon />
        </CListItem>
      ))}
=======
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
>>>>>>> 6a15c59179dfa745e9a22ef358482fcc3d66f381
    </List>
  );
}

export default CMenu;
