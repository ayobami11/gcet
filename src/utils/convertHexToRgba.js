export const convertHexToRgba = (hex, opacity = 1) => {
    const [r, g, b] = hex.replace(/#/, '').match(/.{1,2}/g);

    return `rgba(${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)}, ${opacity})`;
}