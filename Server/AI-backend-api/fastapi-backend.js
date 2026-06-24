const axios = require("axios");

const AI_BACKEND_URL = process.env.AI_BACKEND_URL || 'http://localhost:8000'

// Helper function to call FastAPI
const callAIBackend = async (endpoint, data) => {
  try {
    const response = await axios.post(
      `${AI_BACKEND_URL}${endpoint}`,
      data
    )
    return response.data
  } catch (error) {
    throw new Error(`AI Backend error: ${error.message}`)
  }
}

module.exports = { callAIBackend }