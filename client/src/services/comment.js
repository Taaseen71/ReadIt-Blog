import api from './api-helper';


export const createComment = async (articleId, data) => {
    const resp = await api.post(`/articles/${articleId}/comments`, { comment: data })
    return resp.data;
}


export const readAllComments = async (articleId) => {
    const resp = await api.get(`/articles/${articleId}/comments/`)
    return resp.data
}


export const updateComment = async (articleId, id, data) => {
    const resp = await api.put(`/articles/${articleId}/comments/${id}`, { comment: data });
    return resp.data
}


export const destroyComment = async (articleId, id, data) => {
    const resp = await api.delete(`/articles/${articleId}/comments/${id}`)
    return resp.data;
}