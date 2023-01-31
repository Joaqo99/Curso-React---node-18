import { Routes, Route } from 'react-router-dom'
import { AuthRouter } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';

export const AppRouter = () => {
    return (
            <Routes>
                <Route path="/auth/*" element={<AuthRouter />}/>
                <Route path="/*" element={<JournalRoutes />}/>
            </Routes>
    );
}