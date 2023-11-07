import {ErrorBoundary} from "react-error-boundary";
import {WithAuth} from "@helpers/hoc";
import {FallbackError} from "@components/common";
import {AppRouter} from "@components/feature";
import "./App.scss";

export default function App() {
    return (
        // <WithAuth>
            <ErrorBoundary FallbackComponent={FallbackError}>
                <main className={"app"}>
                    <AppRouter/>
                </main>
            </ErrorBoundary>
        //  </WithAuth>
    );
};
