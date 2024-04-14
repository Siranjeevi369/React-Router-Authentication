import { useNavigate } from "react-router-dom";


export const Home = () =>{
    const navigate = useNavigate();
    return <div>
    <h1>Home Page</h1>
    {/* This code is using go back existing parent element   */}
    {/* <button onClick={() => navigate('order-summary', {replace:true})}>Order</button> */}
    <button onClick={() => navigate('order-summary')}>Order</button>
</div>
    
}
console.log("Home");