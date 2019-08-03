const db = require('../banco/dbConexao');

module.exports = class GaleriaModel{
   
    static getTodos(callback){
       return db.query(" SELECT * FROM GALERIA_VIDEO", callback);
    }

    static getId(id, callback){
        return db.query(" SELECT * FROM GALERIA_VIDEO WHERE id_galeria_video  = ? ", [id], callback);
     }

    static adicionar(dados, callback){
         return db.query("INSERT INTO GALERIA_VIDEO(titulo, caminho) VALUES(?, ?) ", [dados.titulo, dados.caminho], callback);
    }

    static editar(dados, callback){

        if(dados.caminho != null){
            return db.query("UPDATE GALERIA_VIDEO SET titulo = ?, caminho = ? WHERE id_galeria_video = ? ", [dados.titulo, dados.caminho, dados.id_galeira_video], callback);
        }else{
            return db.query("UPDATE GALERIA_VIDEO SET titulo = ? WHERE id_galeria_video = ? ", [dados.titulo, dados.id_galeira_video], callback);
        }
    }

    static deletar(id, callback){
        return db.query(" DELETE FROM GALERIA_VIDEO WHERE id_galeria_video  = ? ", [id], callback);
    }

}