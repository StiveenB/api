import app from './app.js';
import { sequelize } from './database/database.js';


async function main(){
        //await sequelize.sync({force: true})
        console.log("Coenccion establecida");
        await app.listen(app.get('port'));
        console.log('server port', app.get('port'));
}
main();