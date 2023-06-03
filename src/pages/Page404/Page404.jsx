import { useNavigate } from "react-router-dom";
import "./Page404.css"
import BackBtn from "@material-ui/icons/ArrowBack"

function Page404() {
    const navigate=useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
  return (
    <div className="page404">
        <h1 className="heading404">4<span>0</span>4</h1>
      <button className="goBackBtn" onClick={handleGoBack} >
        Go Back &nbsp; <BackBtn/>
      </button>
    </div>
  )
}

export default Page404
