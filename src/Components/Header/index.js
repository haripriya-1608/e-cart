import { HomeFilled } from "@ant-design/icons";
import { Menu } from 'antd';
import { useNavigate } from "react-router-dom";

function AppHeader() {
     const navigate = useNavigate()

     const onMenuClick=(item)=>{
       navigate(`/${item.key}`);
     };
    return (
    <div className="appHeader">
        <Menu
        onClick={onMenuClick}
          mode="horizontal"
          items={[
            {
              label: <HomeFilled />,
              key: "",
            },
            {
              label: "Men",
              key: "men",
              children: [ 
                {
                  label: "Men's Shirts",
                  key: "mens-shirts",
                },
                {
                  label: "Men's watches",
                  key: "mens-watchees",
                },
                {
                  label: "Men's Shoes",
                  key: "mens-shoes", 
                },
              ],
            },
            {
              label: "Women",
              key: "women",
              children: [ 
                {
                  label: "Women's Dresses",
                  key: "womens-dresses",
                },
                {
                  label: "Women's Shoes",
                  key: "womens-shoew",
                },
                {
                  label: "Women's Bags",
                  key: "womens-bags",
                },
                {
                  label: "Women's Watches",
                  key: "womens-watches",
                },
                {
                  label: "Women's Jewellary",
                  key: "womens-jewellary",
                },
              ],
            },
            {
              label: "Accessories",
              key: "accessories",
            },
          ]} 
        />
    </div>
  );
}
export default AppHeader;