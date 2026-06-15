const API_KEY = import.meta.env.VITE_BOOKING_API_KEY;
const BASE_URL = 'https://booking-com.p.rapidapi.com';

const headers = {
  'X-RapidAPI-Key': API_KEY,
  'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
};

/**
 * Note: These are simplified implementations.
 * Booking.com API usually requires multiple steps (destinationId -> search).
 * For this integration, we focus on the search results structure.
 */

export const searchLocations = async (query) => {
  if (!query) return [];
  try {
    const response = await fetch(`${BASE_URL}/v1/flights/searchDestination?query=${query}`, { headers });
    const data = await response.json();
    // Usually returns data.data which is an array of destinations
    return data?.data || [];
  } catch (error) {
    console.error("Location Search Error:", error);
    return [];
  }
};

export const searchFlights = async (fromId, toId, date) => {
  try {
    const response = await fetch(`${BASE_URL}/v1/flights/searchFlights?fromId=${fromId}&toId=${toId}&date=${date}`, { headers });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Flight Search Error:", error);
    return null;
  }
};

export const searchTrains = async (from, to, date) => {
  // Booking.com API often combines transit or uses specific endpoints
  try {
    const response = await fetch(`${BASE_URL}/v1/transit/search?from=${from}&to=${to}&date=${date}&type=train`, { headers });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Train Search Error:", error);
    return null;
  }
};
