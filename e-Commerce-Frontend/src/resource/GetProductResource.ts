import axios, { AxiosResponse } from "axios";
import { ProductDetailedData, ProductListData } from "../data/ProductData";
import getEnvConfig from "../config/Config";

export const getMockProductResource = (): ProductListData[] => {
  const productList: ProductListData[] = [];

  for (let i = 1; i <= 20; i++) {
    const product: ProductListData = {
      product_id: i,
      product_name: `Product ${i}`,
      price: Math.floor(Math.random() * 100) + 1,
      hasStock: Math.random() < 0.5,
      image_url: `https://picsum.photos/id/${i}/200/300`,
    };

    productList.push(product);
  }

  return productList;
};

export function getProductResource(
  setProductListData: (inData: ProductListData[]) => void
) {
  axios
    .get(`${getEnvConfig().baseUrl}/public/product`)
    .then((response: AxiosResponse<ProductListData[]>) => {
      setProductListData(response.data);
    });
}

export function getProductResourceLowToHigh(
  setProductListData: (inData: ProductListData[]) => void
) {
  axios
    .get(`${getEnvConfig().baseUrl}/public/product/priceLowToHigh`)
    .then((response: AxiosResponse<ProductListData[]>) => {
      setProductListData(response.data);
    });
}

export function getProductDetail(
  product_ID: string,
  onLoadProductDetailData: (inData: ProductDetailedData | null) => void
) {
  axios
    .get(`${getEnvConfig().baseUrl}/public/product/${product_ID}`)
    .then((response: AxiosResponse<ProductDetailedData>) => {
      onLoadProductDetailData(response.data);
    })
    .catch((error) => {
      console.log(error.message);
      // have value == got the details successfully
      // null = the type has empty value
      // undefined = there is no type
    });
}
