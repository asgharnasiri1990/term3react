import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
    onClick: () => void;
    onClose: () => void;
    color?: 'primary' | 'seconday' | 'danger';
}
const Button = ({ children,onClose, onClick, color = 'danger' }: Props) => {

    return (
        <div>
            <button type="button" className={"btn btn-" + color}
                 onClick={onClick}>
                {children}
            </button>

            <button type="button" className="btn btn-primary"
            onClick={onClose}>
                Close Button
            </button>



        </div>
    )

};
export default Button;