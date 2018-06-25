import React from 'react';

const HeaderBar = () => {
		return(
            <header>
                <div className="navbar navbar-dark bg-dark box-shadow">
                    <div className="container d-flex justify-content-between">
                        <a href="/" className="navbar-brand d-flex align-items-center">
                            <img src="img/logo.png" width="200" height="50"/>
                        </a>
                    </div>
                </div>
            </header>
		)
		}

export default HeaderBar;