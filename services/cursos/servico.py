from flask import Flask, jsonify
import mysql.connector as mysql

servico = Flask(__name__)

IS_ALIVE = "yes"
DEBUG = True
TAMANHO_PAGINA = 6

MYSQL_SERVER = "bd"
MYSQL_USER = "root"
MYSQL_PASS = "admin"
MYSQL_BANCO = "techcursos"

def get_conexao_bd():
    conexao = mysql.connect(host = MYSQL_SERVER, user = MYSQL_USER, password = MYSQL_PASS, database = MYSQL_BANCO)
    return conexao

@servico.route("/cursos/<int:pagina>/<string:busca>")
def get_cursos(pagina,busca):
    cursos = []
    conexao = get_conexao_bd()
    cursor = conexao.cursor(dictionary=True)
    cursor.execute("select c.id, c.title, c.description, c.playlistID, c.thumbnail from cursos AS c where c.title like '%" + busca + "%' limit " +
        str((pagina - 1) * TAMANHO_PAGINA) + ", " + str(TAMANHO_PAGINA))
    resultado = cursor.fetchall()
    for registro in resultado:
        cursos.append(registro)
    return jsonify(cursos)

if __name__ == "__main__":
    servico.run(
        host="0.0.0.0",
        debug=DEBUG
    )