require('dotenv').config()
const inquirer = require('inquirer');

async function main() {
    // get the client
    const mysql = require('mysql2/promise');
    // create the connection
    try {
        const connection = await mysql.createConnection({ host: process.env.DB_HOST, user: process.env.DB_USER, database: process.env.DB_NAME });
        const answers = await inquirer
        .prompt([
            {
                message: "What would you like to do?",
                name: "action",
                type: "list",
                choices: ['View all departments',
                    'View all roles',
                    'View all employees',
                    'Add a department',
                    'Add a role',
                    'Add an employee',
                    'Update an employee role'
                ]
    
            },
           
        ]);
    
        if(answers.action === 'view all departments') {
            const [rows, fields] = await connection.execute('SELECT * FROM `department`');
            console.table(rows);
        }
    } catch(error) {
        console.error(error);
    }
   
   


    
    // query database
    //const [rows, fields] = await connection.execute('SELECT * FROM `table` WHERE `name` = ? AND `age` > ?', ['Morty', 14]);
}



main();