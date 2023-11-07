import classNames from 'classnames';
import './LayoutContainer.scss';

const LayoutContainer = ({children, className}) => {
    return (
        <div className={classNames("layout__details", className)}> 
          {children}
        </div>
    );
}

export default LayoutContainer;
