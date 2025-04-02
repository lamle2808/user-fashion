import { List, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

import CheckroomIcon from "@mui/icons-material/Checkroom"; // Quần áo nói chung
import WomanIcon from "@mui/icons-material/Woman"; // Quần áo nữ
import ManIcon from "@mui/icons-material/Man"; // Quần áo nam
import ChildCareIcon from "@mui/icons-material/ChildCare"; // Quần áo trẻ em
import WalletIcon from '@mui/icons-material/Wallet';
import LocalMallIcon from "@mui/icons-material/LocalMall"; // Túi xách, giày dép
import { ListButton } from "../assets/style/Style";

const Menu = ({ hovered, setHovered, setData }) => {
  const handleHover = () => {
    setHovered(!hovered);
  };
  return (
    <div style={{ width: "30%", height: "100%" }}>
      <List
        sx={{
          width: "100%",
          bgcolor: "white",
          borderRadius: 5,
          marginTop: 1,
          zIndex: 2,
        }}
        component="nav"
      >
        <ListButton
          onMouseEnter={() => {
            setHovered(true);
            setData("1");
          }}
          onMouseLeave={handleHover}
        >
          <ListItemIcon>
            <CheckroomIcon />
          </ListItemIcon>
          <ListItemText primary="Tất cả quần áo" />
        </ListButton>

        <ListButton
          onMouseEnter={() => {
            setHovered(true);
            setData("12,7,11");
          }}
          onMouseLeave={handleHover}
        >
          <ListItemIcon>
            <WomanIcon />
          </ListItemIcon>
          <ListItemText primary="Quần áo nữ" />
        </ListButton>

        <ListButton
          onMouseEnter={() => {
            setHovered(true);
            setData("8,9");
          }}
          onMouseLeave={handleHover}
        >
          <ListItemIcon>
            <ManIcon />
          </ListItemIcon>
          <ListItemText primary="Quần áo nam" />
        </ListButton>

        <ListButton
          onMouseEnter={() => {
            setHovered(true);
            setData("5,6");
          }}
          onMouseLeave={handleHover}
        >
          <ListItemIcon>
            <ChildCareIcon />
          </ListItemIcon>
          <ListItemText primary="Quần áo trẻ em" />
        </ListButton>

        <ListButton
          onMouseEnter={() => {
            setHovered(true);
            setData("10");
          }}
          onMouseLeave={handleHover}
        >
          <ListItemIcon>
            <WalletIcon />
          </ListItemIcon>
          <ListItemText primary="Phụ kiện" />
        </ListButton>

        <ListButton
          sx={{ marginBottom: 0 }}
          onMouseEnter={() => {
            setHovered(true);
            setData("3,2,4");
          }}
          onMouseLeave={handleHover}
        >
          <ListItemIcon>
            <LocalMallIcon />
          </ListItemIcon>
          <ListItemText primary="Túi xách, Giày dép" />
        </ListButton>
      </List>
    </div>
  );
};
export default Menu;