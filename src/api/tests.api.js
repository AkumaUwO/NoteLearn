import axiosInstance from "@/lib/axios";


/**************************{ Get }**************************/

export const get_test2Notes = async () => {
    const response = await axiosInstance.get('/getNotes');

    return response.data
};

export const get_test6Notes = async (interval, type) => {
    const response = await axiosInstance.get(`/getNotesWithIntervals/${interval}/${type}`);

    return response.data
};