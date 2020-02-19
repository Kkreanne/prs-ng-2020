export class JsonResponse {
    data: any;
    meta: any;
    errors: any;

    constructor(data: any = null, meta: any = null, errors: any = null) {
        this.data = data;
        this.meta = meta;
        this.errors = errors;
    }
}
