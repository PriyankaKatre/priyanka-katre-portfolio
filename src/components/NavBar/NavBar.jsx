import React from 'react';
import myImage from '../../assets/priyanka.jpg';
import {HashLink as Link } from 'react-router-hash-link';

export const NavBar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    <span className="d-block d-lg-none">Priyanka Katre</span>
                    <span className="d-none d-lg-block">
                        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={myImage} alt="..." />
                    </span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link smooth to = {'#about'} className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth to = {'#experience'} className="nav-link">Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth to = {'#skills'} className="nav-link">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth to = {'#education'} className="nav-link">Education</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth to = {'#services'} className="nav-link">Community Services</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}
