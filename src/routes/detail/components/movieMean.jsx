import PropTypes from 'prop-types';
import React, { Component } from 'react';
import LineLink from './../../../components/lineLink'
import './movieMeans.css'
const MovieMeans = () => {
    return (
        <div className="containMeans">
            <div className="meansTitle">影片资料</div>
            <div className="lineLinkHome">
                <div>
                    <LineLink tittle={'幕后花絮'} />
                </div>
                <div>
                    <LineLink tittle={'台词精选'} />

                </div>
                <div>
                    <LineLink tittle={'出品发行'} />

                </div>
            </div>
        </div>
    )
}

export default MovieMeans;