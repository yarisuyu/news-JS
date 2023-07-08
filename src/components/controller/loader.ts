import ApiRequest from "../api/apiRequest";
import ApiResponse from "../api/apiResponse";
import { responseCallback } from "../api/utils/types";

class Loader {
    baseLink: string;
    options: {};

    constructor(baseLink: string, options: {}) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        request: ApiRequest,
        callback: responseCallback<ApiResponse> = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', request.endpoint, callback, request.options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: {}, endpoint: Endpoint) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key as keyof typeof urlOptions]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: Endpoint, callback: responseCallback<ApiResponse>, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
