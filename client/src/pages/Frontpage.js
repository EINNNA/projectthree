import React, { Component } from "react";
import Navbar from "./../Component/Navbar";
import Card from '@material-ui/core/Card';

class Frontpage extends Component {
    state = {
        name: "",
        diff: "",
        snap: "",
        price: "",
        time: ""
    }
    // componentDidMount() {
    //     API.getBaseBreedsList()
    //       .then(res => this.setState({ breeds: res.data.message }))
    //       .catch(err => console.log(err));
    //   };


    render() {
        return (
            <Navbar/>
        )
    }
};

// https://poring.world/api/search?order=popularity&rarity=&inStock=1&modified=&category=&endCategory

export default Frontpage;