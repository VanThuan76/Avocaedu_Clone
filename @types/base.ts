export interface IBaseResponse<T> {
    count: number;
    next: null;
    previous: null;
    results: T;
}