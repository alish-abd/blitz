import './NewModalLayout.scss';

const NewModalLayout = ({children}) => {
    return (
        <div className="add_modal">
            <div className="add_modal_content">
                {children}
            </div>
        </div>
    );
}

export default NewModalLayout;
