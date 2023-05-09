import json
import logging
import os
import urllib.request
import hashlib

# Crear registros
logger = logging.getLogger()
logger.setLevel(logging.INFO)

# Obtener variable de entorno
API_KEY = os.environ["API_KEY"]
PUBLIC_KEY = os.environ["PUBLIC_KEY"]
PRIVATE_KEY = os.environ["PRIVATE_KEY"]


# Funcion Lambda
def lambda_handler(event, context):
    # Obtener cabecera de solicitud
    headers = event.get("headers")
    # Obtener de la cabezera la llave
    api_key = headers.get("x-api-key")

    # Si la llave es diferente a la de entorno sale del codigo
    if api_key != API_KEY:
        return {"statusCode": 401, "body": json.dumps("No autorizado")}

    # Obtener datos Solicitud
    http = event.get("requestContext").get("http")
    method = http.get("method")
    path = http.get("path")

    # Salir si no es el metodo post o get
    if method not in ["GET", "POST"]:
        return {"statusCode": 405, "body": json.dumps("Metodo not allowed")}

    # Hacer si entra
    if method == "GET":
        url = "https://gateway.marvel.com:443/v1/public/characters"
        ts = "1"
        # Generar hash
        hash_input = ts + PRIVATE_KEY + PUBLIC_KEY
        hash_output = hashlib.md5(hash_input.encode()).hexdigest()

        # Construir URL con los parametros
        url += "?ts=" + ts + "&apikey=" + PUBLIC_KEY + "&hash=" + hash_output

        # Hacemos la solicitud GET
        with urllib.request.urlopen(url) as f:
            response = f.read().decode("utf-8")

        return {"statusCode": 200, "body": response}

    return {"statusCode": 200, "body": json.dumps("Hola")}
