import React, { useState } from 'react';
import './LostAndFound.css'; // Importing the new CSS file

function LostAndFound() {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [announcements, setAnnouncements] = useState([
        {
            name: "Hannah Banana",
            item: "Shoes",
            description: "I lost my shoes. If someone finds them, please contact me.",
            contact: "1234567892",
            image: "lostshoes.png"
        }
    ]);

    const handleNameChange = (e) => setName(e.target.value);
    const handleContactChange = (e) => setContact(e.target.value);
    const handleDescriptionChange = (e) => setDescription(e.target.value);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            if (file.type.startsWith("image/")) {
                setImage(URL.createObjectURL(file));
            } else {
                alert("Please upload a valid image file.");
            }
        }
    };

    const handleUpload = () => {
        const newAnnouncement = {
            name: name || "Anonymous",
            item: "Lost Item",
            description: description || "No description provided.",
            contact: contact || "N/A",
            image: image || "lostshoes.png"
        };
        setAnnouncements([...announcements, newAnnouncement]);
        setName('');
        setContact('');
        setDescription('');
        setImage(null);
    };

    return (
        <div className="lost-and-found-container">
            <h1 className="header">Lost and Found</h1>

            {/* Upload Section */}
            <div className="upload-section">
                <label>Upload a picture of the lost or found item:</label>
                <input type="file" onChange={handleImageChange} />
                {image && <img src={image} alt="preview" className="image-preview" />}

                <input
                    type="text"
                    placeholder="Your Name (optional)"
                    value={name}
                    onChange={handleNameChange}
                    className="input-field"
                />

                <input
                    type="text"
                    placeholder="Contact Information (optional)"
                    value={contact}
                    onChange={handleContactChange}
                    className="input-field"
                />

                <textarea
                    placeholder="Brief description of the item (optional)"
                    value={description}
                    onChange={handleDescriptionChange}
                    className="input-field textarea"
                />

                <button
                    onClick={handleUpload}
                    className="upload-button"
                >
                    Upload
                </button>
            </div>

            {/* Announcements Section */}
            <div className="announcements-section">
                <h2>Announcements</h2>
                <h3>Found Items</h3>

                {announcements.map((announcement, index) => (
                    <div key={index} className="announcement-card">
                        <img src={announcement.image} alt="lost item" className="announcement-image" />
                        <h3>{announcement.name}</h3>
                        <p>{announcement.description}</p>
                        <p>Contact: {announcement.contact}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LostAndFound;
