// src/components/FoodEditor.js
import React, { useContext } from 'react';
import './FoodEditor.css';
import { MenuContext } from '../context/MenuContext';

const FoodEditor = () => {
    const { menu, setMenu } = useContext(MenuContext);

    const handleChange = (e, category, meal) => {
        setMenu({
            ...menu,
            [category]: { ...menu[category], [meal]: e.target.value },
        });
    };

    return (
        <div className="food-editor-container">
            <h1>Edit Food Menu</h1>

            <div className="menu-category">
                <h2>Vegetarian</h2>
                <label>
                    Breakfast:
                    <input
                        type="text"
                        value={menu.vegetarian.breakfast}
                        onChange={(e) => handleChange(e, 'vegetarian', 'breakfast')}
                    />
                </label>
                <label>
                    Lunch:
                    <input
                        type="text"
                        value={menu.vegetarian.lunch}
                        onChange={(e) => handleChange(e, 'vegetarian', 'lunch')}
                    />
                </label>
                <label>
                    Dinner:
                    <input
                        type="text"
                        value={menu.vegetarian.dinner}
                        onChange={(e) => handleChange(e, 'vegetarian', 'dinner')}
                    />
                </label>
            </div>

            <div className="menu-category">
                <h2>Non-Vegetarian</h2>
                <label>
                    Breakfast:
                    <input
                        type="text"
                        value={menu.nonVegetarian.breakfast}
                        onChange={(e) => handleChange(e, 'nonVegetarian', 'breakfast')}
                    />
                </label>
                <label>
                    Lunch:
                    <input
                        type="text"
                        value={menu.nonVegetarian.lunch}
                        onChange={(e) => handleChange(e, 'nonVegetarian', 'lunch')}
                    />
                </label>
                <label>
                    Dinner:
                    <input
                        type="text"
                        value={menu.nonVegetarian.dinner}
                        onChange={(e) => handleChange(e, 'nonVegetarian', 'dinner')}
                    />
                </label>
            </div>

            <button className="save-button" onClick={() => console.log("Menu saved")}>
                Save Menu
            </button>
        </div>
    );
};

export default FoodEditor;
