interface Rectangle{
    shape: "rectangle";
    width: number;
    height: number;
}
interface Circle{
    shape: "circle";
    radius: number;
}

type Shape = Circle | Rectangle;
function calculateShapeArea(shape: Shape): number{
    if(shape.shape === "rectangle"){
        return shape.width * shape.height
    }else if(shape.shape === "circle"){
        const areaOfCircle = +(Math.PI * shape.radius *shape.radius).toFixed(2)
        return areaOfCircle
    }else{
        throw new Error ("Please enter rectangle or circle shape")
    }
}