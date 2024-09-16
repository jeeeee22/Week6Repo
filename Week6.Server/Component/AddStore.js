import React, { useState } from 'react';
import axios from 'axios';

const AddStore = ({ onStoreAdded }) => {
    const [storeName, setStoreName] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5062/api/stores', {
                name: storeName
            });
            if (response.status === 201) {
                onStoreAdded();
                setStoreName('');
            }
        } catch (error) {
            console.error('Error adding store:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Store Name:
                <input
                    type="text"
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Add Store</button>
        </form>
    );
};

export default AddStore;
