import { RAZORPAY_KEY } from "../utils/constant";
import {useNavigate} from "react-router-dom"
const usePayment=(totalPayment)=>{
    const navigate=useNavigate()
    const handlePayment=()=>{
       navigate("/")
    }
    const launchRazorPay=()=>{
        let options={
            key:RAZORPAY_KEY,
            amount:totalPayment*100,
            currency:"INR",
            name:"BigKart",
            image:"https://scontent.fknu1-1.fna.fbcdn.net/v/t39.30808-6/302240292_474152434722010_5176801738778183315_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=tVsE3V2BkVMAX-QChJP&_nc_ht=scontent.fknu1-1.fna&oh=00_AfC5akDe4XPxrd-JDDZ6DSrModFN9-NtyEJ0svri7L5RoQ&oe=650CAFE7",
            description:"Order food online",
            handler:handlePayment,
            theme:{color:"#c4242d"}
        };
        const razorPayment=new window.Razorpay(options)
        razorPayment.open()
    };
    return launchRazorPay;
}
export default usePayment
