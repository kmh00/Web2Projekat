import '../App.css';
import { useNavigate } from 'react-router-dom';
function Header(){
    const nav=useNavigate();
    const goToRegistration=()=>{
        nav('register');
    }
   
    return (
        <div style={{height:'50px',width:'100%', backgroundColor:'#ededed', borderBottom:'3px solid #b0b0b0'}}>
            <button className='headerButton' onClick={()=>nav('')}>Login</button>
            <button className='headerButton' onClick={goToRegistration}>Registration</button>
        </div>
    )
}
export default Header;