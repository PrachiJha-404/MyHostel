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

    const handleSave = async () => {
        // Assuming you want to save the updated menu to the backend
        try {
            const response = await fetch('http://localhost:5000/api/menu', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(menu),
            });

            if (response.ok) {
                console.log("Menu saved successfully");
            } else {
                console.error("Failed to save menu");
            }
        } catch (error) {
            console.error("Error saving menu:", error);
        }
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
            <button className="save-button" onClick={handleSave}>
                Save Menu
            </button>
        </div>
    );
};

export default FoodEditor;
