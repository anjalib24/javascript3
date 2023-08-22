const userMap=new Map();
function adduser(name,age,email)
{
    const userinfo={age,email};
    userMap.set(name,userinfo);
}
function update(name,age,email)
{

    if(userMap.has(name))
    
        let userinfo=userMap.get(name);
        userinfo.age=age;
        userinfo.email=email;
        console.log(userinfo);

    
}

function deleteUser(name)
{
   userMap.delete(name); 
}
adduser("alice",31,"newemail@gmail.com");
console.log(userMap);
// deleteUser("alice");
// console.log(userMap);
update("anjali",23,"anjalibirla@gmail.com");
 console.log(userMap)



