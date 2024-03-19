import { Card, List, Image, Typography, Badge } from "antd";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../API";

function Products() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getAllProducts().then((res) => {
      setItems(res.products);
      console.log(res.products);
    });
  }, []);
  return (
    <div>
      <List
        grid={{ column: 3 }}
        renderItem={(product, index) => {
          return (
            <Badge.Ribbon className="itemCardBadge" text={product.discountPercentage} color="pink">
            <Card
              className="itemCard"
              title={product.title}
              key={index}
              cover={<Image className="itemCardImage" src={product.thumbnail} />}
            >
              <Card.Meta title={<Typography.Paragraph>
                Price: ₹{product.price}{" "}
                <Typography.Text delete type="danger">
                  {parseFloat(
                  product.price + (product.price * product.discountPercentage) / 100).toFixed(2)}</Typography.Text>
                </Typography.Paragraph>
                }
                 description={<Typography.Paragraph ellipsis={{rows:2, expandable:true, symbol:"more"}}>{product.description}</Typography.Paragraph>}
                ></Card.Meta>
            </Card>
            </Badge.Ribbon>
          );
        }}
        dataSource={items}
      ></List>
    </div>
  );
}
export default Products;
