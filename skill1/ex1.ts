//UNION TYPES (|)

//ID

type IDType = number | string;

const showID = (id: IDType)=>{
    console.log("Your Id is:" + id);
}

showID(12345);
showID("AB123");

