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

@servico.route("/favoritos/<int:curso>/<string:usuario>")
def get_favoritos(curso,usuario):
    favoritos = []
    conexao = get_conexao_bd()
    cursor = conexao.cursor(dictionary=True)
    cursor.execute("select id from favoritos where usuario = " + str(usuario) + " AND cursoid = " + str(curso))
    resultado = cursor.fetchall()
    for registro in resultado:
        favoritos.append(registro)
    return jsonify(favoritos)

@servico.route("/insert_favoritos/<int:curso>/<string:usuario>")
def insert_favoritos(curso,usuario):
    resultado = jsonify(situacao="ok", erro="")
    conexao = get_conexao_bd()
    cursor = conexao.cursor()
    try:
        cursor.execute(f"insert into favoritos (usuario, cursoid) values ('{usuario}', {curso})")
        conexao.commit()
    except:
        conexao.rollback()
        resultado = jsonify(situacao="erro", erro="erro ao adicionar favoritos")
    return resultado

@servico.route("/delete_favoritos/<int:favoritos>")
def delete_favoritos(favoritos):
    resultado = jsonify(situacao="ok", erro="")
    conexao = get_conexao_bd()
    cursor = conexao.cursor()
    try:
        cursor.execute(f"delete from favoritos where id = {favoritos}")
        conexao.commit()
    except:
        conexao.rollback()
        resultado = jsonify(situacao="erro", erro="erro ao deletar favoritos")
    return resultado

if __name__ == "__main__":
    servico.run(
        host="0.0.0.0",
        debug=DEBUG
    )