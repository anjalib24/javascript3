function hasProperty(obj,propertyname) {
    return obj.hasOwnProperty(propertyname);

};
const example={name:"alice",age:25};
console.log(hasProperty(example,"age"));
console.log(hasProperty(example,"email"));
