import "./FallbackError.scss";

export default function FallbackError({error}) {
    return (
        <div className={"fallback-error"}>
            <div className={"fallback-error__terminal"}>
                <nav className={"fallback-error__menu"}>
                    <div className={"fallback-error__close"}/>
                    <div className={"fallback-error__minimize"}/>
                    <div className={"fallback-error__zoom"}/>
                </nav>
                <div className={"fallback-error__screen"}>
                    <code className={"fallback-error__message"}>{error.message}</code>
                </div>
            </div>
        </div>
    );
};