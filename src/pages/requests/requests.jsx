import { Link } from "react-router-dom";
import "./requests.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie Requests</h1>
      </div>
      <div className="productTop">
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productInfoImg" />
                  <span className="productName">Request</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey"><b>Request Id:</b></span>
                      <span className="productInfoValue">123</span>
                  </div>
                  <div className="complain">
                      <span className="productInfoKey"><b>Details:</b></span><br></br>
                      <span>Hi, I would like to request the movie, The Great Gatsby to be added.</span>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}
