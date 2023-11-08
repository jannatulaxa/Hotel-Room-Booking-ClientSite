import { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { FcGoogle } from 'react-icons/fc';

const Google = () => {
    const {googleLogin}=useContext(AuthContext)

    const handelGoogle=(media)=>{
        media()
    }
    return (
        <div className='text-center'>
            
            <button className='btn btn-outline btn-secondary' onClick={()=>handelGoogle(googleLogin)}><FcGoogle></FcGoogle>Google</button>
        </div>
    );
};

export default Google;