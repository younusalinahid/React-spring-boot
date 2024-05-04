import {Link, useParams} from "react-router-dom";
import React from "react";

function WelcomeComponent() {
    const {name} = useParams();
    return (
        <>
            <h1>Welcome!</h1>
            <div className="container">
                Welcome {name}. You can manage your todos <Link to="/todos">here</Link>
            </div>
        </>

    );
}

export default WelcomeComponent;