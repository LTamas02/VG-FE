import axios from 'axios';

const API_URL = 'url';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getItems = async () => {
  try {
    const response = await api.get('/items');
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};

export const getItemById = async (id) => {
    try {
        const response = await api.get(`/items/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching item with id ${id}:`, error);
        throw error;
    }
};

export const createItem = async (itemData) => {
    try {
        const response = await api.post('/items', itemData);
        return response.data;
    } catch (error) {
        console.error('Error creating item:', error);
        throw error;
    }   
};

export const updateItem = async (id, itemData) => {
    try {
        const response = await api.put(`/items/${id}`, itemData);
        return response.data;
    } catch (error) {
        console.error(`Error updating item with id ${id}:`, error);
        throw error;
    }
};

export const deleteItem = async (id) => {
    try {
        const response = await api.delete(`/items/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting item with id ${id}:`, error);
        throw error;
    }
};