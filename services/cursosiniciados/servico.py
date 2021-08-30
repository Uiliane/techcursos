from flask import Flask, jsonify
import mysql.connector as mysql

servico = Flask(__name__)

IS_ALIVE = "yes"
DEBUG = True

MYSQL_SERVER = "bd"
MYSQL_USER = "root"
MYSQL_PASS = "admin"
MYSQL_BANCO = "techcursos"

def get_conexao_bd():
    conexao = mysql.connect(host = MYSQL_SERVER, user = MYSQL_USER, password = MYSQL_PASS, database = MYSQL_BANCO)
    return conexao

@servico.route("/cursosiniciados/<string:usuario>")
def get_cursosiniciados(usuario):
    cursosiniciados = []
    conexao = get_conexao_bd()
    cursor = conexao.cursor(dictionary=True)
    cursor.execute("select distinct(c.id), c.title, c.description, c.playlistID, c.thumbnail from cursosiniciados ci, cursos c where ci.usuario = '" + str(usuario) + "' AND ci.cursoid = c.id")
    resultado = cursor.fetchall()
    for registro in resultado:
        cursosiniciados.append(registro)
    return jsonify(cursosiniciados)

@servico.route("/insert_cursosiniciados/<int:curso>/<string:usuario>")
def insert_cursosiniciados(curso,usuario):
    resultado = jsonify(situacao="ok", erro="")
    conexao = get_conexao_bd()
    cursor = conexao.cursor()
    try:
        cursor.execute(f"insert into cursosiniciados (usuario, cursoid) values ('{usuario}', {curso})")
        conexao.commit()
    except:
        conexao.rollback()
        resultado = jsonify(situacao="erro", erro="erro iniciando curso")
    return resultado

if __name__ == "__main__":
    servico.run(
        host="0.0.0.0",
        debug=DEBUG
    )