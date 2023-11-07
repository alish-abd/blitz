import classNames from "classnames";

export default function Image({className, src, name, handleClick, alt, ...props}) {
    try {
        const image = src ? src : `src/assets/images/${name}`;

        if (!image) {
            return null;
        } else {
            return (
                <img
                    className={classNames("image", className)}
                    src={image}
                    onClick={handleClick}
                    alt={alt}
                    {...props}
                />
            );
        }
    } catch (error) {
        return (
            <img
                className={classNames("image", className)}
                onClick={handleClick}
                alt={alt}
            />
        );
    }
};