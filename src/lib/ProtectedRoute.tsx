import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'

interface ProtectedRouteProps {
    children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    const isAuthenticated = useIsAuthenticated()

    return isAuthenticated ? children : <Navigate to="/" replace />;
}
