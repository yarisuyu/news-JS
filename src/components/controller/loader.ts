import ApiRequest from '../api/apiRequest';
import ApiResponse from '../api/apiResponse';
import { responseCallback, Endpoint } from '../api/utils/types';

class Loader {
    private baseLink: string;
    private options: object;

    constructor(baseLink: string, options: object) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        request: ApiRequest,
        callback: responseCallback<ApiResponse> = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', request.endpoint, callback, request.options);
    }

    private errorHandler(res: Response): Response | never {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: object, endpoint: Endpoint): string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key as keyof typeof urlOptions]}&`;
        });

        return url.slice(0, -1);
    }

    private load(method: string, endpoint: Endpoint, callback: responseCallback<ApiResponse>, options: object) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
