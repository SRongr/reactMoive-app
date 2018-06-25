import React, { Component } from 'react';
import Star from '../star'
import renderer from 'react-test-renderer'

it('渲染正常',()=>{
const tree = renderer.create(<Star value = {7}/>).toJSON();
    expect(tree).toMatchSnapshot();

})