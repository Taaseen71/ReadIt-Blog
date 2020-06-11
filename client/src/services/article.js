import api from './api-helper'



export const getAllArticles = async () => {
    const resp = await api.get('/articles')
    return resp.data;
}


export const getOneArticle = async (id) => {
    const resp = await api.get(`/articles/${id}`)
    return resp.data;
}

export const createArticle = async (articleData) => {
    const resp = await api.post('/articles', { article: articleData })
    return resp.data
}

export const updateArticle = async (id, data) => {
    const resp = await api.put(`/articles/${id}`, { article: data })
    return resp.data
}

export const destroyArticle = async (id, data) => {
    const resp = await api.delete(`/articles/${id}`)
    return resp.data
}
