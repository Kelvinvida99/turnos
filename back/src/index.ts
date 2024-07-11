import app from "./servers";
import { PORT } from "./config/envs";
import "reflect-metadata"
import { AppDataSource } from "./config/data-source"

AppDataSource.initialize()
.then(res => {
  console.log('El servidor se ha conectado a la base datos correctamente')
  app.listen(PORT, () => {
    console.log(`El puerto esta escuchado en la entrada ${PORT}`);
  })
})


/* app.listen(PORT, () => {
  console.log(`El puerto esta escuchado en la entrada ${PORT}`);
});
 */