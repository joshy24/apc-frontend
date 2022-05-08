import AuthHelperMethods from './AuthHelperMethods';

const Auth = new AuthHelperMethods();

const Axios = Auth.axios;

const AxiosExport = Auth.axios_export;

export const postRequest = async(url, payload = {}) => {
    const data = await Axios(url, payload, "post")
        .then(resp => resp.data)
        .catch(err => {
            return {err}
        })

        return data;
}

export const putRequest = async(url, payload = {}) => {
    const data = await Axios(url, payload, "put")
        .then(resp => resp.data)
        .catch(err => {
            return {err}
        })

        return data;
}

export const getRequest = async(url) => {
    const data = await Axios(url, {}, "get")
        .then(resp => resp.data)
        .catch(err => {
            return {err}
        })

        return data;
}

export const getExportRequest = async(url, extension) => {
    const data = await AxiosExport(url, extension)
        .then(resp => resp.data)
        .catch(err => {
            return {err}
        })

        return data;
}

export const deleteRequest = async(url) => {
    const data = await Axios(url, {}, "delete")
        .then(resp => resp.data)
        .catch(err => {
            return {err}
        })

        return data;
}