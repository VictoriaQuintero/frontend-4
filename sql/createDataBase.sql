-- CREACIÓN DE DATABASE
CREATE DATABASE registros;

-- CREACIÓN DE TABLA DENTRO DE LA BASE

CREATE TABLE personas(
    idPersona INTEGER AUTO_INCREMENT PRIMARY KEY,
    nombre TEXT NOT NULL,
    correo TEXT NOT NULL,
    contraseña TEXT NOT NULL
);