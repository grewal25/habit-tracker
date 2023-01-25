import { Link } from "react-router-dom";


function Home(){
    return<>
       <p>hi, please select one of these options</p>
        <p><Link to="/gym">GYM</Link></p>
        <p><Link to="/monday">Daily Tasks</Link></p>
    </>
}

export default Home;