import { React } from 'react'
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { resetAction } from "../../Redux/actions";

const Document = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/")
        dispatch(resetAction());

    }
    return (
        <div>
            <Button variant="primary" type="submit" onClick={() => handleClick()}>
                Logout
            </Button>
        </div>
        )
}

export default Document