import Raect, { Component, useState, useEffect } from 'react';

const Shop = () =>{
    useEffect(() => {
        fetchItem();

    }, []);


    
const fetchItem = async() => {
    const data = await fetch('https://random.api.randomkey.io/v1/register');
    console.log(data)
}

    return(
        <h1>shop</h1>


    )

}

export default Shop;