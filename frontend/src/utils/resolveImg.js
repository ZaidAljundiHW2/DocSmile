// resolveImg.js
const images = import.meta.glob('/src/assets/**/*', {
    eager: true,
    query: '?url',
    import: 'default'
});

export const resolveImg = (path) => {
    if (!path) return "";

    const vitePath = path.replace('/frontend', '');

    return images[vitePath] || path;
};