import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Dashboard from './Dashboard/Dashboard';

const ProtectedRoute = ({ children }) => {

    const { user } = useAuth();

    if(!user) {
        return <Navigate to='/login' />
    }

    return children;    
}

export default ProtectedRoute;