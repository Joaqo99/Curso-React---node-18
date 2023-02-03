import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthRouter } from '../auth/routes/AuthRoutes';
import { useCheckAuth } from '../hooks';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { CheckingAuth } from '../ui';

export const AppRouter = () => {


    const status = useCheckAuth()


    if (status === 'checking'){
        return <CheckingAuth />
    }

    return (
        <Routes>

            {
                status === 'authenticated' 
                ? <Route path="/*" element={<JournalRoutes />}/>
                : <Route path="/auth/*" element={<AuthRouter />}/>
            }


            <Route path="/*" element={<Navigate to="/auth/login" />} />
        </Routes>
    );
}