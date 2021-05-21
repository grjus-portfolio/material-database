import {knex } from "knex";

const myKnex = knex({
client:"sqllite3",
connection:{
    filename:"./mat.db"
}
})

export default myKnex