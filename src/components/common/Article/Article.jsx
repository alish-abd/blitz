import classnames from "classnames";
import "./Article.scss";

export default function Article({children, className}) {
    return (
        <article className={classnames("article", className)}>
            {
                children
            }
        </article>
    );
};