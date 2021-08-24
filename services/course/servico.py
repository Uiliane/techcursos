from flask import Flask, jsonify
import mysql.connector as mysql
from pymongo import MongoClient

servico = Flask(__name__)

IS_ALIVE = "yes"
DEBUG = True
TAMANHO_PAGINA = 6

