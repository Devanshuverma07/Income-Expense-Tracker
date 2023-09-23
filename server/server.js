const express = require('express');
require("./config/dbConnect")
const usersRoute = require('./routes/users/usersRoutes');
const accountRoute = require('./routes/accounts/accountRoute');
const transactionsRoute = require('./routes/transactions/transactionsRoute');
const globalErrHandler = require('./middlewares/globalErrHandler');
const app = express();
const cors = require("cors");

//middlewares
app.use(express.json()); //pass incoming data

//corse middleware
app.use(cors());

//routes
//user route
app.use("/api/v2/users", usersRoute);

//account routes
app.use("/api/v2/accounts", accountRoute);

//transaction route
app.use("/api/v2/transactions", transactionsRoute);


//Error Handlers
app.use(globalErrHandler);

//Listen to server
const PORT = process.env.PORT || 4000;
app.listen(PORT,console.log(`Server is running on port ${PORT}`));