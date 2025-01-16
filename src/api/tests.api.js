import axiosInstance from "@/lib/axios";


/**************************{ Get }**************************/

export const get_test2Notes = async () => {
    const response = await axiosInstance.get('/getNotes');

    return response.data
};

export const get_UserByEmail = async (data) => {
    const response = await axiosInstance.post('/login/api/get-user-by-email', data);
    return response.data
};

export const user_Login = async (data) => {
    try {
        const response = await axiosInstance.post('/login', data);

        return response.data;
    } catch (error) {
        console.log(error);  
        return error.response.data;
    };
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
