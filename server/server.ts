import {z} from "zod";
import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

//TASK 1

app.get('/ping', (req, res) =>{
    res.json({message:"pong"})
    
});


//TaSK 2

const randomPersonResponseSchema = z.object({
    results: z.array(
        z.object({
            name: z.object({
                first: z.string(),
                last: z.string()
            }),
            location: z.object({
                country: z.string(),
            }), 
        })
    ),
});



app.get("/random-person", async (req, res) => {
  try {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    const validatedRandomPerson = randomPersonResponseSchema.safeParse(data);

    if (!validatedRandomPerson.success) {
      return res.status(500).json({
        error: "Invalid data from randomuser API",
        details: validatedRandomPerson.error,
      });
    }
    const randomPerson = validatedRandomPerson.data.results[0];
    res.json({
      name: `${randomPerson?.name.first} ${randomPerson?.name.last}`,
      location: `${randomPerson?.location.country}`,
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch random person",
    });
  }
});


//TASK3


const userNameSchema =z.object({
    name:z.
    string()
    .min(3, {message: "user name must contain min 3 charachters"})
    .max(12, {message: "user name must contain max 12 charachters"}),
    age:z
    .number()
    .min(18, {message: "you must be 18 years old"})
    .max(100, {message: "you must be at most 100 years old"})
    .optional()
    .default(28),
    email: z.email().toLowerCase()

});


app.post('/users', (req, res) =>{
    const validatedNewUser= userNameSchema.safeParse(req.body);
    
    if(!validatedNewUser.success){
    return res.status(400).json({
        error:"invalid user data",
        data: validatedNewUser.error,
    })

}else{
    console.log(validatedNewUser.data);
}
    
    res.status(201).json({user: validatedNewUser.data});

});


console.log(`Server is running on${PORT}` )
app.listen(PORT,() => {
});