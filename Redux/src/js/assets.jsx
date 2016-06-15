import React,{ PropTypes, Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux"
import { Provider, connect } from "react-redux"
//import CSS
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../css/global.scss"
//Definer
import * as Definer from "./definer.jsx"


Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

export {React,PropTypes,Component,ReactDOM,Definer,createStore,Provider,connect};