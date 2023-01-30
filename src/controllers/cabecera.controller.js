import { Cabecera } from '../models/Cabecera.js'
import { Detalle } from '../models/Detalle.js'

export async function getPagoCab(req, res) {
    const { id } = req.params;
    try {
      const cabecera = await Cabecera.findOne({
        atributes: ["idPC", "descripcionPC", "fechaPC", "idCB", "cedulaCli", "totalPD"],
        where: {
          idPC: id,
        },
      });
      res.json(cabecera);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
  
export async function getPagoCabs (req, res) {
    try {
        const cabecera =  await Cabecera.findAll({include: Detalle});
        res.json(cabecera);
      } catch (error) {
        res.status(500).json({
          message: error.message,
        });
      }
}


export async function getPagoCuentas(req, res) {
  const { id } = req.params;
    try {
      const cabecera = await Cabecera.findAll({
        atributes: ["idCB","idPC", "descripcionPC", "fechaPC", "idCB", "cedulaCli", "totalPD"],
        where: {
          idCB: id,
        },
      });
      res.json(cabecera);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
}

export async function createPagoCab(req, res) {
    const { idPC, descripcionPC, fechaPC, cedulaCli, totalPD, idCB  } = req.body;
    try {
        let newCabecera = await Cabecera.create(
            {
                idPC,
                descripcionPC,
                fechaPC,
                idCB,
                cedulaCli,
                totalPD,
            },
            {
                fields: ["idPC", "descripcionPC", "fechaPC", "idCB", "cedulaCli", "totalPD", "idCB"],
            }
        );
        return res.json(newCabecera);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
    res.send('listo')
}

export const updatePagoCab = async (req, res) => {
    try {
      const { id } = req.params;
      const { descripcionPC, fechaPC, idCB, cedulaCli, totalPD } = req.body;
  
      const cabecera = await Cabecera.findByPk(id);
      cabecera.descripcionPC = descripcionPC;
      cabecera.fechaPC = fechaPC;
      cabecera.idCB = idCB;
      cabecera.cedulaCli = cedulaCli;
      cabecera.totalPD = totalPD;
      await cabecera.save();
      res.json(cabecera);
      console.log({$1})
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  export async function deletePagoCab(req, res) {
    const { id } = req.params;
    try {
      await Detalle.destroy({
        where: {
            idCabecera: id,
        },
      });
      await Cabecera.destroy({
        where: {
            idPC: id
        },
      });
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  