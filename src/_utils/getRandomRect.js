export default context => {
    const mainRectWith = 150,
        x1 = Math.round(Math.random() * (768 - mainRectWith)),
        x2 = x1 + mainRectWith,
        y1 = Math.round(Math.random() * (576 - mainRectWith)),
        y2 = y1 + mainRectWith;
    context.strokeStyle = "red";
    context.lineWidth = 8;
    context.strokeRect(x1, y1, mainRectWith, mainRectWith);
    
    return [x1, x2, y1, y2, mainRectWith];
};