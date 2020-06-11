import api from './api-helper';

//! Fix 'inside quotations'
export const createComment = async (articleId, data) => {
    const resp = await api.post(`/articles/${articleId}/comments`, { comment: data })
    return resp.data;
}

//! Fix 'inside quotations'
export const readAllComments = async () => {
    const resp = await api.get(`/articles/:article_id/comments/${id}`)
    return resp.data
}

//! Fix 'inside quotations'
export const updateComment = async (articleId, id, data) => {
    const resp = await api.put(`/articles/${articleId}/comments/${id}`, { comment: data });
    return resp.data
}

//! Fix 'inside quotations'
export const destroyComment = async (articleId, id, data) => {
    const resp = await api.delete(`/articles/${articleId}/comments/${id}`)
    return resp.data;
}