// src/components/Food.js
import React, { useContext } from 'react';
import './Food.css';
import { MenuContext } from '../context/MenuContext';

const Food = () => {
    const { menu } = useContext(MenuContext);

    return (
        <div className="food-container">
            <h1>FOOD</h1>
            <p>From traditional favorites to contemporary twists, our menu has something for everyone.</p>

            <div className="food-options">
                <h2>Vegetarian</h2>
                <p><strong>Breakfast:</strong> {menu.vegetarian.breakfast}</p>
                <p><strong>Lunch:</strong> {menu.vegetarian.lunch}</p>
                <p><strong>Dinner:</strong> {menu.vegetarian.dinner}</p>
            </div>

            <div className="food-options">
                <h2>Non-Vegetarian</h2>
                <p><strong>Breakfast:</strong> {menu.nonVegetarian.breakfast}</p>
                <p><strong>Lunch:</strong> {menu.nonVegetarian.lunch}</p>
                <p><strong>Dinner:</strong> {menu.nonVegetarian.dinner}</p>
            </div>
        </div>
    );
};

export default Food;
