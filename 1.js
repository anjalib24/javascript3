let car={
    make:"mahindra",
    model:200,
    year:2015
};
function disproperty(car)
{
    for(const property in car)
    {
        console.log(`${property}:${car[property]}`);
    }
}
    disproperty(car);

