import express from "express";
const app = express();
const PORT = 3000;

//PORT
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);

});

//First Route - Homepage ("/") - // Task 1
app.get ('/', (req, res) => {
    res.send("Welcome to our homepage!");
});

//Middleware
app.use(express.json());

// Second route  - //Task 2
app.get('/bookclub', (req, res) => {
    res.json({
        name: "My First BookShop",
        categories: {
            bookclubs: ["Modern Fiction", "Classic", "Sci-Fi", "Horror", "Queer"],
            groupLeader: ["Jenny", "Sara", "Ronnie", "John", "Sid"],
            bookOfTheMonth: [
                { 
                    title: "The Names",
                    author: "Florence Knapp",
                    genre: "Modern Fiction"
                },
                { 
                    title:  "The Winter of Our Discontent",
                    author:  "John Steinbeck",
                    genre: "Classics"
                },
                { 
                    title: "There is No Antimemetics Division",
                    author:  "qntm",
                    genre: "Sci-Fi"
                },
                { 
                    title:"Angel Down",
                    author: "Daniel Kraus",
                    genre: "Horror"
                },
                { 
                    title: "Ordinary Saints",
                    author: "Niamh Ní Mhaoileoin",
                    genre: "Queer"
                },
            ],

          meetingDay: [
            {
                group: "Modern Fiction",
                date:"2026-09-30",
                time: "19.00 - 21.00"
            },
            {
               group: "Classics",
               date:"2026-09-19",
               time: "19.00 - 21.00"
            },
            {
               group: "Sci-fi",
               date:"2026-09-20",
               time: "19.00 - 21.00"
            },
            {
               group: "Horror",
               date:"2026-09-25",
               time: "19.00 - 21.00"
            },
            {
               group: "Queer",
               date:"2026-09-28",
               time: "19.00 - 21.00"
            }]
        },
        lastUpdated: new Date().toISOString().split("T")[0],

    });
});

// Task 3 - status code 200 (tested with Insomnia)

//Task 4 - About 

app.get('/about', (req, res) => {
    res.json({
        title: "Foo's immaginary bookshop",
        description: "An immaginary bookshop with ten book clubs, different typre subscription box, and a calendar full of author events for readers of every genre.",
        founded: "literally today",
        location: "Malmo, Sweden",
    });
});

// here I tried to add  more JSON Route

app.get('/subscription', (req, res) => {
    res.json({
        subscriptions: [
                {
                    plan: "3 Months Subscription",
                    price: "190kr/month",
                    deliveryOption: [
                      { type: "Pick-up", price: "Included"},
                      { type: "Delivery", price: "45:- extra/month"}
                    ],

                },
                {
                    plan: "6 Months Subscription",
                    price: "180kr/month",
                    deliveryOption: [
                        { type: "Pick-up", price: "Included"},
                        { type: "Delivery", price: "45:- extra/month"}
                    ],
                },
                {
                    plan: "12 Months Subscription",
                    price: "170kr/month",
                    deliveryOption: [
                        { type: "Pick-up", price: "Included"},
                        { type: "Delivery", price: "45:- extra/month"}
                    ],
                },
            ]

    });

});

/*
app.get('/events', (req, res) => {
    res.json({
            events: [
                {
                    title: "Author Meet & Greet: Florence Knapp",
                    date: "2026-10-04",
                },
                {
                    title: "Midnight Release Party: The Summer War Sequel",
                    date: "2026-10-18",
                },
                {
                    title: "Sci-Fi Trivia Night",
                    date: "2026-09-27",
                }
            ]
    });

});*/

//Task 5


//This uses res.send instead of res.json beacuse is just returning a message so just text works fine
app.get('/openinghours',(req, res) =>{
    res.send("We are open Mon–Sat, 09.00 - 18.00")
});

//TASK 6
// '/'       Status code : 200  // 404 if not found
// '/about'  Status code : 200  // 404 if not found
// '/bookclub'  Status code : 200  // 404 if not found
// '/subscription'  Status code : 200  // 404 if not found
// '/openinghours'  Status code : 200  // 404 if not found
// '/events'  Status code : 200  // 404 if not found




//Task 7  // insomnia stauts code: 200

app.get('/events', (req, res) => {
    res.status(200).json({
            events: [
                {
                    title: "Author Meet & Greet: Florence Knapp",
                    date: "2026-10-04",
                },
                {
                    title: "Midnight Release Party: The Summer War Sequel",
                    date: "2026-10-18",
                },
                {
                    title: "Sci-Fi Trivia Night",
                    date: "2026-09-27",
                }
            ]
    });

});

//Task 8 // Insomnia status code : 503 Service Unavailable

app.get('/maintenance', (req, res) => {
    res.status(503).send("we are down for maintenance, check back soon!");
});

//task 9 README