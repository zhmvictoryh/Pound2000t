import { response } from 'express';
import React, { Component } from 'react';
import {StyleSheet, Text, View, ActivityIndicatior} from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            isLoading: true,
            dataSource: null,
        }
    }
    componentDidMount(){
        return fetch('http://localhost:3000/User')
        .then((response) => response.json())
        .then((responseJson) => {

            this.setState({
                isLoading: false,
                dataSource: responseJson.User,
            })
        })

        .catch((error) =>{
            console.log('error')
        });
    }

render() {
    return (
        <div></div>
    );
}