
import axiosInstance from "@/lib/axios";

/**************************{ Auth }**************************/

export const user_Login = async (data) => {
    try {
        const response = await axiosInstance.post('/login', data);

        return response.data;
    } catch (error) {
        console.log(error);  
        return error.response.data;
    };
};


/**************************{ Get }**************************/

export const get_UserSocres = async () => {
    const response = await axiosInstance.get('/getAllScores');
    return response.data
};


/**************************{ Create }**************************/

export const registerUser = async (data) => {
    try {
        const response = await axiosInstance.post('/register', data);

        return response.data;
    } catch (error) {
        console.log(error);  
        return error.response.data;
    };
};

export const create_score = async (data) => {
    try {
        const response = await axiosInstance.post('/uploadScore', data);

        return response.data;
    } catch (error) {
        console.log(error);  
        return error.response.data;
    };
};


/**************************{ Update }**************************/

export const update_user = async (id, data) => {
    try {
        const response = await axiosInstance.put('/profile/api/update-user-password', { id, data });

        return response.data
    } catch (error) {
        console.error(error)
    };
};


/**************************{ Delete }**************************/

export const delete_user = async (id) => {
    try {
        const response = await axiosInstance.delete(`/profile/api/delete-user/${id}`);

        return response.data
    } catch (error) {
        console.error(error)
    };
};
