import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { privateRoutes, openRoutes } from "@routes";
import { Layout } from "@components/layout";
import { WithAuth, ProtectedRoute } from "@helpers/hoc";
import { OpenRoute } from "@helpers/hoc/OpenRoute";
import { Suspense } from "react";
import { HOME_ROUTE, AUTH_ROUTE, ACCESS_TOKEN, PROFILE_ROUTE } from "@utils/consts";

export default function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {privateRoutes.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <Layout>
                  <ProtectedRoute>
                    <Component />
                  </ProtectedRoute>
              </Layout>
            }
          />
        ))}

        {openRoutes.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={
             <Layout>
                <OpenRoute>
                    <Component />
                </OpenRoute>
            </Layout>
            }
          />
        ))}
        
        <Route path="*" element={<Navigate to={PROFILE_ROUTE} replace />} />
      </Routes>
    </Suspense>
  );
}
