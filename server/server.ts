import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());


type Party = {
  id: number;
  name: string;
  leader: string;
  seats: number;
};

type PartyParams = {
  id: string;
};

// Parties to add

// { id: 5, name: "Vänsterpartiet", leader: "Nooshi Dadgostar", seats: 21 },
// { id: 6, name: "Kristdemokraterna", leader: "Ebba Busch", seats: 19 },
// { id: 7, name: "Miljöpartiet", leader: "Amanda Lind", seats: 18 },
// { id: 8, name: "Liberalerna", leader: "Simona Mohamsson", seats: 16 },

let parties: Party[] = [
  { id: 1, name: "Socialdemokraterna", leader: "Magdalena Andersson", seats: 106 },
  { id: 2, name: "Sverigedemokraterna", leader: "Jimmie Åkesson", seats: 70 },
  { id: 3, name: "Moderaterna", leader: "Ulf Kristersson", seats: 66 },
  { id: 4, name: "Centerpartiet", leader: "Elisabeth Thand Ringqvist", seats: 24 },
  
];


/*
//Task1

app.get('/parties', (req, res) =>{
    res.json(parties);

});


//Task2  updated in Task 3

app.post('/parties', (req, res) =>{
     const newParty = {
        id: parties.length + 1,
        name: req.body.name,
        leader: req.body.leader,
        seats: req.body.seats
    };
    parties.push(newParty);
    res.json({message: "New party added successfully", party:newParty})

});*/

//Task3 


app.get('/parties', (req, res) =>{
    res.json(parties);

});

/*
app.post('/parties', (req, res) =>{
     const newParty = {
        id: parties.length + 1,
        name: req.body.name,
        leader: req.body.leader,
        seats: req.body.seats
    };
    parties.push(newParty);
    res.json({message: "New party added successfully", party:newParty})

});*/


/*JSON added in Insomnia 

{ 
	
	"name": "Vänsterpartiet",
	"leader": "Nooshi Dadgostar",
	"seats": 21 
}

  
*/

//Task 4

app.put('/parties/:id', (req: express.Request<PartyParams>, res) =>{
    const partyId = parseInt(req.params.id);
    const party = parties.find((p) => p.id === partyId);
    if (!party){
        return res.status(404).json({message:"Party not found"});
    }
    party.id = req.body.id || party.id;
    party.name = req.body.name || party.name;
    party.leader = req.body.leader || party.leader;
    party.seats = req.body.seats || party.seats;

    res.json({message:"party: updated successfully", party })
});


//Task 5
app.delete('/parties/:id',( req:express.Request<PartyParams>,res) =>{
    const partyId = parseInt(req.params.id);
    parties = parties.filter((p) => p.id !== partyId);
   
    res.json({message: "Party deleted succesfully"});
  
});

//TAsk 6 & 7
app.post('/parties', (req, res) => {
    if (!req.body.name || !req.body.leader) {
        res.status(400).json({ message:"name and leader are required"});
    } else {
        const newParty = {
            id: parties.length + 1,
            name: req.body.name,
            leader: req.body.leader,
            seats: req.body.seats
        };
        
        parties.push(newParty);
        res.status(201).json({ message: "New party added successfully", party: newParty });
    }
});


//Task 8

app.get('/parties/seats-total', (req, res) =>{
      
    let totalSeats = 0;
    parties.forEach((p) =>{
        totalSeats += p.seats;
    })
    
    
    res.json({totalSeats});


});


//Task 9 README.md



app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`);
});