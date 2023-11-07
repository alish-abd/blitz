import "./AppLoader.scss";

export default function AppLoader() {
    return (
        <div className={"app-loader"}>
            <div className={"app-loader__content"}>
                <div className={"app-loader__shadow"}/>
                <div className={"app-loader__box"}/>
            </div>
        </div>
    );
};