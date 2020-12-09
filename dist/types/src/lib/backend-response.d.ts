export declare type BackendError = {
    type: 'error';
    message: string;
};
export declare type BackendWarning = {
    type: 'warning';
    message: string;
};
export declare type BackendResponse<T> = Promise<{
    data: T;
    error?: never;
    warning?: BackendWarning[];
}> | Promise<{
    data?: never;
    error: BackendError[];
}>;
