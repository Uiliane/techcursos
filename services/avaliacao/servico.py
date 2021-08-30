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

@servico.route("/avaliacao/<int:curso>/<string:usuario>")
def get_avaliacao(curso,usuario):
    avaliacao = []
    conexao = get_conexao_bd()
    cursor = conexao.cursor(dictionary=True)
    cursor.execute("select id, avaliacao from avaliacao where usuario = " + str(usuario) + " AND cursoid = " + str(curso) + " order by id desc")
    resultado = cursor.fetchall()
    for registro in resultado:
        avaliacao.append(registro)
    return jsonify(avaliacao)

@servico.route("/insert_avaliacao/<int:curso>/<string:usuario>/<int:avaliacao>")
def insert_avaliacao(curso,usuario,avaliacao):
    resultado = jsonify(situacao="ok", erro="")
    conexao = get_conexao_bd()
    cursor = conexao.cursor()
    try:
        cursor.execute(f"insert into avaliacao (usuario, cursoid, avaliacao) values ('{usuario}', {curso}, {avaliacao})")
        conexao.commit()
    except:
        conexao.rollback()
        resultado = jsonify(situacao="erro", erro="erro ao adicionar avaliacao")
    return resultado

@servico.route("/update_avaliacao/<int:avaliacaoid>/<int:avaliacao>")
def update_avaliacao(avaliacaoid,avaliacao):
    resultado = jsonify(situacao="ok", erro="")
    conexao = get_conexao_bd()
    cursor = conexao.cursor()
    try:
        cursor.execute(f"update avaliacao set avaliacao={avaliacao} WHERE id={avaliacaoid}")
        conexao.commit()
    except:
        conexao.rollback()
        resultado = jsonify(situacao="erro", erro="erro ao atualizar avaliacao")
    return resultado

if __name__ == "__main__":
    servico.run(
        host="0.0.0.0",
        debug=DEBUG
    )