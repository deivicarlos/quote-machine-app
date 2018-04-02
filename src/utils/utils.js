const colors = ['#16a085', '#27ae60', '#2c3e50',
    '#f39c12', '#e74c3c', '#9b59b6', '#FB6964',
    '#472E32', '#BDBB99', '#77B1A9', '#73A857'];


export const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

export const cleanHtmlString = (text) => {
    const regExp = new RegExp(/&#[0-9]{2,15};/g);

    return text.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '')
    .replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '')
    .replace(/<\/?[^>]+(>|$)/g, "")
    .replace(regExp, '')
    .trim();
};