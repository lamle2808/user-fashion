import { useState } from "react";
import "../styles/DetailItemDescription.scss";
import { useEffect } from "react";
import axios from "axios";

import { useHistory } from "react-router-dom";

import gift from "../assets/images/gift-filled.png";
import { toast } from "react-toastify";
import { Box, Stack, Typography } from "@mui/material";

const DetailItemDescription = (props) => {
  const [dataDes, setDataDes] = useState();
  const dataUser = JSON.parse(localStorage.getItem("data"));
  const [das, setDas] = useState("");
  const history = useHistory();
  useEffect(() => {
    if (props.data) {
      axios
        .get(`/api/v1/products/getById/${props.data}`)
        .then(function (response) {
          setDataDes(response);
          console.log(response.data);
          if (response.data.sale !== null) {
            setDas(
              response.data.price -
                response.data.price * (response.data.sale.discount / 100)
            );
          } else {
            setDas(response.data.price);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [props.data]);

  const handleView = () => {
    const newPath = `/BuyNow/${props.data}`;

    history.push(newPath);
  };

  const addToCart = () => {
    axios
      .post("/api/v1/shoppingCartDetails/saveOrUpdate", {
        product: { id: dataDes.data.id },
        shoppingCart: { id: dataUser.shoppingCart.id },
        quantity: 1,
      })
      .then(function () {
        toast.success("Thêm vào giỏ hàng thành công");
      })
      .catch(function () {
        toast.error("Có lỗi xảy ra, vui lòng thử lại sau!");
      });
  };

  return (
    <div className="ContainerDes">
      <div className="title">
        {dataDes && dataDes.data ? dataDes.data.productName : ""}
      </div>

      <div className="ContainerChild">
        <div className="brand">
          {`Thương hiệu: ${
            dataDes && dataDes.data ? dataDes.data.brand.name : ""
          }`}
        </div>

        <div className="cate">
          {`Loại sản phẩm: ${
            dataDes && dataDes.data ? dataDes.data.category.categoryName : ""
          }`}
        </div>
      </div>
      {/* =============================== */}

      <Box
        sx={{
          marginTop: 2,
          backgroundColor: "lightgray",
          display: "flex",
          alignItems: "center",
          height: 100,
          borderRadius: 5,
        }}
      >
        {dataDes && dataDes.data ? (
          <Stack
            direction={"row"}
            spacing={10}
            sx={{ marginLeft: 2, display: "flex", alignItems: "center" }}
          >
            <Typography variant="h3" sx={{ color: "red", fontWeight: "bold" }}>
              {das.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ
            </Typography>
            {dataDes.data.sale ? (
              <Stack
                direction={"row"}
                gap={5}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Typography
                  variant="h5"
                  sx={{ textDecoration: "line-through" }}
                >
                  {dataDes.data.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                  đ
                </Typography>

                <Box
                  sx={{ border: "1px solid red", padding: 1, borderRadius: 2 }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "red", fontWeight: "bold" }}
                  >
                    {dataDes.data.sale.discount} %
                  </Typography>
                </Box>
              </Stack>
            ) : null}
          </Stack>
        ) : null}
      </Box>

      <div className="promotionContainer">
        <div className="promotionTitle">ƯU ĐÃI KHI MUA HÀNG:</div>
        <div className="promoChild">
          <img alt="" className="giftImg" src={gift}></img>
          <div className="giftContent">
            Miễn phí ship toàn quốc
          </div>
        </div>
        <div className="promoChild">
          <img alt="" className="giftImg" src={gift}></img>
          <div className="giftContent">
           Miễn phí 1 đổi 1 nếu sản phẩm có lỗi do nhà sản xuất
          </div>
        </div>
        <div className="promoChild">
          <img alt="" className="giftImg" src={gift}></img>
          <div className="giftContent">
            Không giới hạn số lượng được giảm giá khi mua sản phẩm
          </div>
        </div>
        <div className="promoChild">
          <img alt="" className="giftImg" src={gift}></img>

          <div className="giftContent">
           Miễn phí đổi trả nếu không hài lòng (áp dụng cho sản phẩm còn tem sản phẩm và có hoá đơn mua hàng)
          </div>
        </div>
      </div>
      <div className="button-container">
        <button className="btnBuy" onClick={() => handleView()}>
          Mua ngay
        </button>

        <button className="btnAdd" onClick={() => addToCart()}>
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
};
export default DetailItemDescription;
