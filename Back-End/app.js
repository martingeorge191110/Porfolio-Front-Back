import express from 'express'
import contact from './Routes/contact.js'
import cors from 'cors';

const port = 4000;
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors())


app.use( "/api/contact", contact)

app.listen(port, () => console.log(`Now server is listening into ${port} ......`));
