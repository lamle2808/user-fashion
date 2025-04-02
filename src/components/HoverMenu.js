import { Box, Paper, Stack, Typography } from "@mui/material";
import {
  dataWomen,
  dataMen,
  dataKids,
  dataKids2,
  dataAccessories,
  dataAccessories2,
  dataFashion,
  dataFashion2,
} from "../assets/action/Data";
import { useEffect, useState } from "react";
import { BoxMenu, TextMenu } from "../assets/style/Style";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
function HoverMenu({ hovered, setHovered, data }) {
  const handleHover = () => {
    setHovered(!hovered);
  };
  const [daa, setDaa] = useState("");
  const [daas, setDaas] = useState("");
  useEffect(() => {
    switch (data) {
      case "1": // Tất cả quần áo -> dataWomen
        setDaa(dataWomen);
        setDaas(dataMen); // Có thể kết hợp quần áo nam và nữ
        break;
      case "12,7,11": // Quần áo nữ
        setDaa(dataWomen);
        break;
      case "8,9": // Quần áo nam
        setDaa(dataMen);
        break;
      case "5,6": // Quần áo trẻ em
        setDaa(dataKids);
        setDaas(dataKids2);
        break;
      case "10": // Phụ kiện
        setDaa(dataFashion);
        setDaas(dataFashion2);
        break;
      case "3,2,4": // Túi xách, Giày dép
        setDaa(dataAccessories);
        setDaas(dataAccessories2);
        break;
      default:
        break;
    }
  }, [data]);
  const history = useHistory();

  const handled = (as) => {
    history.push(`/Find/${data + ":" + as}`);
  };
  return (
    <>
      {hovered ? (
        <Paper
          sx={{
            position: "absolute",
            width: 820,
            display: "flex",
            borderRadius: "10px",
            backgroundColor: "white",
            zIndex: 3,
            marginLeft: 30,
            height: 350,
            marginTop: 1,
          }}
          onMouseLeave={handleHover}
          onMouseEnter={() => setHovered(true)}
        >
          <Stack sx={{ flex: 1 }}>
            <BoxMenu>
              {daa ? (
                daa.map((item, index) => {
                  return (
                    <Box sx={{ flex: 1, height: "100%" }} key={index}>
                      <Typography variant="h6" color={"red"}>
                        {item.id}
                      </Typography>
                      {item.type.map((name, index) => {
                        return (
                          <TextMenu
                            variant="body2"
                            key={index}
                            onClick={() => handled(name.name)}
                          >
                            {name.name}
                          </TextMenu>
                        );
                      })}
                    </Box>
                  );
                })
              ) : (
                <></>
              )}
            </BoxMenu>
            <BoxMenu>
              {daas ? (
                daas.map((item, index) => {
                  return (
                    <Box sx={{ flex: 1, height: "100%" }} key={index}>
                      <Typography variant="h6" color={"red"}>
                        {item.id}
                      </Typography>
                      {item.type.map((name, index) => {
                        return (
                          <TextMenu
                            variant="body2"
                            key={index}
                            onClick={() => handled(name.name)}
                          >
                            {name.name}
                          </TextMenu>
                        );
                      })}
                    </Box>
                  );
                })
              ) : (
                <></>
              )}
            </BoxMenu>
          </Stack>
        </Paper>
      ) : null}
    </>
  );
}

export default HoverMenu;
