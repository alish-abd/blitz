import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '@pages';
import './AuthRouter.scss';

const AuthRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/auth" replace />} />
        </Routes>
    );
}

export default AuthRouter;