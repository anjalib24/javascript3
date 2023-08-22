let emp={
    name:"a",
    salaey:30000,
    city:"indore",
};
function property()
{
for(const property in emp)
{
    console.log(` ${emp[property]}`)
}
}
property(emp);
