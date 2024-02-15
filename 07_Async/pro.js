// Random color generator

const randomColor = function() {
    const hex = "0123456ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16 )]; 
    }
    return color
};