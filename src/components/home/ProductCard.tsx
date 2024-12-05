import styled from "@emotion/styled"
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    .product-card-container{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
    }

    .logo img{
        width:200px;
    }

    .product-desc{
        font-family: "Lato", sans-serif;
        color:white;
        font-size:1.2rem;
    }

    .cta{
        padding: 10px 20px;
        border:0;
        background:#55B76B;
        color:white;
        font-family: "Montserrat", sans-serif;
        font-weight: bold;
        margin-top:10px;
        border-radius: 5px;
        }
`
export const ProductCard = ({logo,desc,detail,preview}) => {
    const navigate = useNavigate();

    return (
        <Container>
            <div className="product-card-container">
                <div>
                    <div className="logo">
                        <img src={logo} alt="ecoroute logo" />
                    </div>
                    <div className="product-desc">
                {desc}
                    </div>
                    <button className="cta" onClick={()=>{
                        window.location.href = "https://www.instagram.com/ecoroute.apps/"
                    }}>Detail</button>
                </div>
                <div>
                    <img src={preview} alt="" className="productPreview" />
                </div>
            </div>
        </Container>
    )
}