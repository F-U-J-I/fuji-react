import {useNavigate} from "react-router";

export const withRouter = (Component) => {
    return (props) => {
        const navigate = useNavigate();
        return <Component navigate={navigate} {...props}/>
    };
};