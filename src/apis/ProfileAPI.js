import axios from '~/config/Axios';

/**
 * Get Profile Details
 */
const PROFILE_API = async () => {
  const url = "/api/Account/get-user-and-account";
  return axios.get(url);
};

/**
 * Get User Name and Details
 */
const GET_NAME_API = () => {
    const url = "/api/Login/get-user-details"; // Fetch user name and basic details
    return axios.get(url).then(res => res.data);
};

/**
 * Get Caller Tunes
 */
const GET_CALLER_TUNES_API = () => {
    const url = "/api/Ringtone"; // Fetch available caller tunes
    return axios.get(url);
};

/**
 * Get Account Details
 */
const GET_ACCOUNT_API = (userId) => {
    const url = `/api/Account/${userId}`; // Fetch account-specific details
    return axios.get(url).then(res => res.data);
};

/**
 * sửa lại cái này
 * 
 * @param {*} data 
 * @returns 
 */
  export const UPDATE_PROFILE_API = async (data) => {
    try {
      const response = await axios.put("/api/profile/update", data);
      return response.data; // Assume success property in response
    } catch (error) {
      console.error("Error updating profile:", error);
      throw error;
    }
  };
  
export {
    PROFILE_API,
    GET_NAME_API,
    GET_CALLER_TUNES_API,
    GET_ACCOUNT_API
};
