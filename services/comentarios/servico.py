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

@servico.route("/comentarios/<int:curso>")
def get_comentarios(curso):
    comentarios = []
    conexao = get_conexao_bd()
    cursor = conexao.cursor(dictionary=True)
    cursor.execute("select id, usuario, comentario from comentarios where cursoid = " + str(curso))
    resultado = cursor.fetchall()
    for registro in resultado:
        comentarios.append(registro)
    return jsonify(comentarios)

@servico.route("/insert_comentarios/<int:curso>/<string:usuario>/<string:comentario>")
def insert_comentarios(curso,usuario,comentario):
    resultado = jsonify(situacao="ok", erro="")
    conexao = get_conexao_bd()
    cursor = conexao.cursor()
    try:
        cursor.execute(f"insert into comentarios (usuario, cursoid, comentario) values ('{usuario}', {curso}, '{comentario}')")
        conexao.commit()
    except:
        conexao.rollback()
        resultado = jsonify(situacao="erro", erro="erro ao adicionar comentário")
    return resultado

@servico.route("/delete_comentarios/<int:comentario>")
def delete_comentarios(comentario):
    resultado = jsonify(situacao="ok", erro="")
    conexao = get_conexao_bd()
    cursor = conexao.cursor()
    try:
        cursor.execute(f"delete from comentarios where id = {comentario}")
        conexao.commit()
    except:
        conexao.rollback()
        resultado = jsonify(situacao="erro", erro="erro ao deletar comentário")
    return resultado

if __name__ == "__main__":
    servico.run(
        host="0.0.0.0",
        debug=DEBUG
    )