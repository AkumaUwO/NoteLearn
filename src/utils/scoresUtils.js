import { create_score } from "@/api/user.api";

export const createNewScore = async (id, username, score) => {
    try {
        const data = {
            score: score,
            username: username,
            lessonNumber: id
        };
    
        return result = await create_score(data);
    } catch (error) {
        console.log("createNewScore: ", error);
    };
};