import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './linkLink.css'

const LineLink = ({tittle,extra,href='#'}) => {
    return (
        <a href={href}  className="lineLink" href={href}>
            <div className="tittle">{tittle}</div>
            <div className="extra">{extra}</div>
            <i className="iconRight"></i>
        </a>
    )
}
LineLink.propTypes = {
    tittle : PropTypes.string.isRequired,
    extra: PropTypes.string,
    href:PropTypes.string,
}
export default LineLink;