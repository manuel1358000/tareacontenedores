CREATE TABLE usuarios (
    cod_usuario serial PRIMARY KEY,
    carne varchar(255),
    nombre varchar(255),
    direccion varchar(255)
);

insert into usuarios(carne,nombre,direccion)values('201213580','Manuel Antonio Fuentes Fuentes','Zona 11 Guatemala');
insert into usuarios(carne,nombre,direccion)values('201200001','Luis Fernando Ramirez Santos','Zona 12 Guatemala');
insert into usuarios(carne,nombre,direccion)values('201200002','Ricky Alexander Yancor Castillo','Zona 01 Guatemala');
insert into usuarios(carne,nombre,direccion)values('201200003','Andrea Valentina Calderon','Zona 02 Guatemala');
insert into usuarios(carne,nombre,direccion)values('201200004','Brayan Armando Yaquian','Zona 03 Guatemala');
insert into usuarios(carne,nombre,direccion)values('201200005','Carlos Eduardo Fuentes Fuentes','Zona 04 Guatemala');
insert into usuarios(carne,nombre,direccion)values('201200006','Brian Gonzalez','Zona 05 Guatemala');