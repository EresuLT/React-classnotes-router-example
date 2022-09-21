import { Outlet, Navigate } from 'react-router-dom';

const PrivateRouter = () => {

    //? Aslında bu bilgi Global State'den okunacak.
    const isAuthenticated = false;

    return (
        isAuthenticated ? <Outlet /> : <Navigate to="/" />
    )
};

export default PrivateRouter;