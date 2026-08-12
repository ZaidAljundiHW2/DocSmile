const BASE_PATH = process.env.NODE_ENV === 'production'
    ? '/DocSmile'
    : '';

export const resolveImg = (path: string) => `${BASE_PATH}${path}`;