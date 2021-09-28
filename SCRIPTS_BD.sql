----------------------------------------------------------------------
--TABLAS
----------------------------------------------------------------------

--DROP TABLE [EA2A-GRUPO2].dbo.TM_PROYECTO;
CREATE TABLE [EA2A-GRUPO2].dbo.TM_PROYECTO (
	IDPROYECTO int IDENTITY(1,1) NOT NULL,
	DESCRIPCION VARCHAR(500) NULL,
	TIPOPROYECTO varchar(100) NULL,
	IDEMPRESA int NULL,
	AREAEMPRESA varchar(100) NULL,
	JEFEPROYECTO VARCHAR(256) NULL,
	IDSERVICIO int NULL,
	FECHAINICIOPLAN varchar(20) NULL,
	FECHAINICIOREAL varchar(20) NULL,
	FECHAFINPLAN varchar(20) NULL,
	FECHAFINREAL varchar(20) NULL,
	PROGRESOPROYECTO varchar(10) NULL,
	ACTIVO bit NULL,
	USUARIOCREA int NULL,
	USUARIOMODIFICA int NULL,
	FECHACREA datetime NULL,
	FECHAMODIFICA datetime NULL,
	CONSTRAINT PK__TM_PROYE__0C889540EFD2AA62 PRIMARY KEY (IDPROYECTO)
);


INSERT INTO [EA2A-GRUPO2].dbo.TM_PROYECTO VALUES('Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Agile',1,'Ventas','Juan Perez',1,'20/02/2021','19/02/2021','01/03/2021','05/03/2021','100%',1,1,null,getdate(),null);
INSERT INTO [EA2A-GRUPO2].dbo.TM_PROYECTO VALUES('Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Agile',2,'Marketing','Alvaro Caceres',2,'20/01/2021','29/01/2021','01/04/2021','05/04/2021','50%',1,1,null,getdate(),null);
INSERT INTO [EA2A-GRUPO2].dbo.TM_PROYECTO VALUES('Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Cascade',3,'Contabilidad','Paola rojas',3,'22/05/2021','01/06/2021','01/11/2021','05/11/2021','20%',1,1,null,getdate(),null);
INSERT INTO [EA2A-GRUPO2].dbo.TM_PROYECTO VALUES('Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Agile',4,'Ventas','Nicolas Cruz',4,'20/02/2021','19/02/2021','01/03/2021','05/03/2021','34%',1,1,null,getdate(),null);
INSERT INTO [EA2A-GRUPO2].dbo.TM_PROYECTO VALUES('Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Agile',5,'Ventas','Warner David',5,'20/02/2021','19/02/2021','01/03/2021','05/03/2021','46%',1,1,null,getdate(),null);
INSERT INTO [EA2A-GRUPO2].dbo.TM_PROYECTO VALUES('Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Agile',6,'Marketing','Diego',6,'20/12/2020','23/12/2020','01/03/2021','05/03/2021','65%',1,1,null,getdate(),null);
INSERT INTO [EA2A-GRUPO2].dbo.TM_PROYECTO VALUES('Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Agile',1,'Ventas','Jose Jose',1,'20/02/2021','19/02/2021','01/03/2021','05/03/2021','34%',1,1,null,getdate(),null);
INSERT INTO [EA2A-GRUPO2].dbo.TM_PROYECTO VALUES('Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Cascade',2,'Tecnologia','Carlos Ciseneros',2,'20/02/2021','19/02/2021','01/03/2021','05/03/2021','20%',1,1,null,getdate(),null);
INSERT INTO [EA2A-GRUPO2].dbo.TM_PROYECTO VALUES('Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Agile',3,'Ventas','Jose Casinelli',3,'20/02/2021','19/02/2021','01/03/2021','05/03/2021','87%',1,1,null,getdate(),null);
INSERT INTO [EA2A-GRUPO2].dbo.TM_PROYECTO VALUES('Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Agile',4,'Marketing','Pedro Diaz',4,'20/02/2021','19/02/2021','01/03/2021','05/03/2021','98%',1,1,null,getdate(),null);
INSERT INTO [EA2A-GRUPO2].dbo.TM_PROYECTO VALUES('Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Agile',7,'Ventas','Carlos Alcantara',5,'20/02/2021','19/02/2021','01/03/2021','05/03/2021','56%',1,1,null,getdate(),null);
INSERT INTO [EA2A-GRUPO2].dbo.TM_PROYECTO VALUES('Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Agile',7,'Ventas','Mario Juarez',6,'20/02/2021','19/02/2021','01/03/2021','05/03/2021','76%',1,1,null,getdate(),null);

SELECT * FROM [EA2A-GRUPO2].dbo.TM_PROYECTO 

--DROP TABLE [EA2A-GRUPO2].dbo.TM_DETALLE_PROYECTO;
CREATE TABLE [EA2A-GRUPO2].dbo.TM_DETALLE_PROYECTO (
	IDDETALLEPROYECTO int IDENTITY(1,1) NOT NULL,
	IDPROYECTO int  NOT NULL,
	FASEPROYECTO varchar(50) NULL,
	DESCRIPCIONHITO varchar(100) NULL,
	PROGRESOHITO varchar(10) NULL,
	FECHAPLANHITO varchar(20) NULL,
	FECHAREALHITO varchar(20) NULL,
	ACTIVO bit NULL,
	USUARIOCREA int NULL,
	USUARIOMODIFICA int NULL,
	FECHACREA datetime NULL,
	FECHAMODIFICA datetime NULL,
	CONSTRAINT PK__TM_DET__0C889540EFD2AA62 PRIMARY KEY (IDDETALLEPROYECTO)
);

INSERT INTO [EA2A-GRUPO2].dbo.TM_DETALLE_PROYECTO 
VALUES(1,'Análisis','Aprobación de documento de alcance','100%','15/06/2021','15/06/2021',1,1,null,getdate(),null)
INSERT INTO [EA2A-GRUPO2].dbo.TM_DETALLE_PROYECTO 
VALUES(2,'Diseño','Aprobación de documento de alcance','100%','15/06/2021','15/06/2021',1,1,null,getdate(),null)
INSERT INTO [EA2A-GRUPO2].dbo.TM_DETALLE_PROYECTO 
VALUES(3,'Análisis','Aprobación de documento de alcance','100%','15/06/2021','15/06/2021',1,1,null,getdate(),null)
INSERT INTO [EA2A-GRUPO2].dbo.TM_DETALLE_PROYECTO 
VALUES(4,'Análisis','Aprobación de documento de alcance','100%','15/06/2021','15/06/2021',1,1,null,getdate(),null)
INSERT INTO [EA2A-GRUPO2].dbo.TM_DETALLE_PROYECTO 
VALUES(5,'Pruebas','Aprobación de documento de alcance','100%','15/06/2021','15/06/2021',1,1,null,getdate(),null)
INSERT INTO [EA2A-GRUPO2].dbo.TM_DETALLE_PROYECTO 
VALUES(6,'Análisis','Aprobación de documento de alcance','100%','15/06/2021','15/06/2021',1,1,null,getdate(),null)
INSERT INTO [EA2A-GRUPO2].dbo.TM_DETALLE_PROYECTO 
VALUES(7,'Análisis','Aprobación de documento de alcance','100%','15/06/2021','15/06/2021',1,1,null,getdate(),null)
INSERT INTO [EA2A-GRUPO2].dbo.TM_DETALLE_PROYECTO 
VALUES(8,'Construccón','Aprobación de documento de alcance','100%','15/06/2021','15/06/2021',1,1,null,getdate(),null)
INSERT INTO [EA2A-GRUPO2].dbo.TM_DETALLE_PROYECTO 
VALUES(9,'Análisis','Aprobación de documento de alcance','100%','15/06/2021','15/06/2021',1,1,null,getdate(),null)
INSERT INTO [EA2A-GRUPO2].dbo.TM_DETALLE_PROYECTO 
VALUES(10,'Construccón','Aprobación de documento de alcance','100%','15/06/2021','15/06/2021',1,1,null,getdate(),null)
INSERT INTO [EA2A-GRUPO2].dbo.TM_DETALLE_PROYECTO 
VALUES(11,'Construccón','Aprobación de documento de alcance','100%','15/06/2021','15/06/2021',1,1,null,getdate(),null)
INSERT INTO [EA2A-GRUPO2].dbo.TM_DETALLE_PROYECTO 
VALUES(12,'Análisis','Aprobación de documento de alcance','100%','15/06/2021','15/07/2021',1,1,null,getdate(),null)
INSERT INTO [EA2A-GRUPO2].dbo.TM_DETALLE_PROYECTO 
VALUES(12,'Diseño','Aprobación de documento de diseño y arequitectura','100%','16/07/2021','15/08/2021',1,1,null,getdate(),null)
INSERT INTO [EA2A-GRUPO2].dbo.TM_DETALLE_PROYECTO 
VALUES(12,'Construcción','desarrollo de módulos','100%','16/08/2021','15/09/2021',1,1,null,getdate(),null)
INSERT INTO [EA2A-GRUPO2].dbo.TM_DETALLE_PROYECTO 
VALUES(12,'Pruebas','Aprobación de documento de pruebas','100%','16/09/2021','15/10/2021',1,1,null,getdate(),null)
INSERT INTO [EA2A-GRUPO2].dbo.TM_DETALLE_PROYECTO 
VALUES(12,'Pase a Producción','Despliegue de proyecto en producción','100%','16/10/2021','15/11/2021',1,1,null,getdate(),null)

SELECT * FROM [EA2A-GRUPO2].dbo.TM_DETALLE_PROYECTO


--DROP TABLE [EA2A-GRUPO2].dbo.TM_EMPRESA;
CREATE TABLE [EA2A-GRUPO2].dbo.TM_EMPRESA (
	IDEMPRESA int IDENTITY(1,1) NOT NULL,
	RUC varchar(20) NULL,
	RAZONSOCIAL varchar(250) NULL,
	RUTAIMAGEN varchar(250) NULL,
	EMAIL varchar(100) NULL,
	DIRECCION varchar(256) NULL,
	ACTIVO bit NULL,
	USUARIOCREA int NULL,
	USUARIOMODIFICA int NULL,
	FECHACREA datetime NULL,
	FECHAMODIFICA datetime NULL,
	CONSTRAINT PK__TM_EMPR__0C889540EFD2AA62 PRIMARY KEY (IDEMPRESA)
);



INSERT INTO [EA2A-GRUPO2].dbo.TM_EMPRESA 
VALUES('204563218479','Barbarian','assets/img/client-barbarian.png','barbarian@emp.com','Peru 123',1,1,null,getdate(),null);
INSERT INTO [EA2A-GRUPO2].dbo.TM_EMPRESA 
VALUES('204563218479','Chazki','assets/img/client-chazki.png','chazki@emp.com','Peru 123',1,1,null,getdate(),null);
INSERT INTO [EA2A-GRUPO2].dbo.TM_EMPRESA 
VALUES('204563218479','Promart','assets/img/client-promart.png','promart@emp.com','Peru 123',1,1,null,getdate(),null);
INSERT INTO [EA2A-GRUPO2].dbo.TM_EMPRESA 
VALUES('204563218479','Innova Schools','assets/img/client-innova.png','innovaschools@emp.com','Peru 123',1,1,null,getdate(),null);
INSERT INTO [EA2A-GRUPO2].dbo.TM_EMPRESA 
VALUES('204563218479','Juntoz','assets/img/client-juntoz.png','juntoz@emp.com','Peru 123',1,1,null,getdate(),null);
INSERT INTO [EA2A-GRUPO2].dbo.TM_EMPRESA 
VALUES('204563218479','Stabilo','assets/img/client-stabilo.png','stabilo@emp.com','Peru 123',1,1,null,getdate(),null);
INSERT INTO [EA2A-GRUPO2].dbo.TM_EMPRESA 
VALUES('204563218479','Nuqa','assets/img/client-nuqa.jpg','nuqa@emp.com','Peru 123',1,1,null,getdate(),null);

SELECT * FROM [EA2A-GRUPO2].dbo.TM_EMPRESA

DROP TABLE [EA2A-GRUPO2].dbo.TM_SERVICIO;
CREATE TABLE [EA2A-GRUPO2].dbo.TM_SERVICIO (
	IDSERVICIO int IDENTITY(1,1) NOT NULL,
	NOMBRE varchar(100) NULL,
	DESCRIPCION varchar(500) NULL,
	RUTAIMAGEN varchar(250) NULL,
	ACTIVO bit NULL,
	USUARIOCREA int NULL,
	USUARIOMODIFICA int NULL,
	FECHACREA datetime NULL,
	FECHAMODIFICA datetime NULL,
	CONSTRAINT PK__TM_SERV__0C889540EFD2AA62 PRIMARY KEY (IDSERVICIO)
);


INSERT INTO [EA2A-GRUPO2].dbo.TM_SERVICIO VALUES('Big Data','La importancia del big data no gira en torno a la cantidad de datos que tienes, sino en lo que haces con ellos. Puedes tomar datos de cualquier fuente y analizarlos para encontrar respuestas que permitan 1) reducir los costos, 2) reducir el tiempo, 3) desarrollar nuevos productos y optimizar las ofertas, y 4) tomar decisiones inteligentes. ','assets/img/service-1.jpg',1,1,NULL,GETDATE(),NULL);
INSERT INTO [EA2A-GRUPO2].dbo.TM_SERVICIO VALUES('Machine Learning','Es una forma de la IA que permite a un sistema aprender de los datos en lugar de aprender mediante la programación explícita. Sin embargo, machine learning no es un proceso sencillo. Conforme el algoritmo ingiere datos de entrenamiento, es posible producir modelos más precisos basados en datos. Un modelo de machine learning es la salida de información que se genera cuando entrena su algoritmo de machine learning con datos.','assets/img/service-2.jpg',1,1,NULL,GETDATE(),NULL);
INSERT INTO [EA2A-GRUPO2].dbo.TM_SERVICIO VALUES('Arquitectura Cloud','La arquitectura de nube constituye la forma en la que se integran las distintas tecnologías para crear las nubes, es decir, los entornos de TI que extraen, agrupan y comparten los recursos escalables en una red. Define cómo se conectan todos los elementos y las funciones que se necesitan para diseñar una nube y obtener una plataforma en línea en la que se puedan ejecutar las aplicaciones.','assets/img/service-3.jpg',1,1,NULL,GETDATE(),NULL);
INSERT INTO [EA2A-GRUPO2].dbo.TM_SERVICIO VALUES('Consultoría TI','La consultoría TI se ha convertido en una herramienta estratégica para buscar eficiencia y eficacia. Un salto cualitativo para el crecimiento de los negocios. El mercado nos obliga a asumir cambios de una manera más frecuente que antaño y si te quedas inmovilizado, el futuro se presenta más aciago. El control de procesos, la automatización de tareas o la gestión colaborativa son algunos de los aspectos a mejorar en muchos negocios.','assets/img/service-4.jpg',1,1,NULL,GETDATE(),NULL);
INSERT INTO [EA2A-GRUPO2].dbo.TM_SERVICIO VALUES('Change Management','Gestión de Cambio se define como la aplicación holística de un proceso estructurado y un conjunto de herramientas para liderar el lado humano del cambio. Esta metodología proporciona beneficios claros de negocio ligados a la optimización de resultados.','assets/img/service-5.jpg',1,1,NULL,GETDATE(),NULL);
INSERT INTO [EA2A-GRUPO2].dbo.TM_SERVICIO VALUES('E-Marketing','Uso del Internet y de las capacidades de medios digitales para auxiliar en la venta de tus productos y servicios. Estas tecnologías digitales son una adición valiosa a las aproximaciones tradicionales del marketing, sin importar el tamaño y tipo de un negocio.','assets/img/service-6.jpg',1,1,NULL,GETDATE(),NULL);


SELECT * FROM [EA2A-GRUPO2].dbo.TM_SERVICIO


CREATE TABLE [EA2A-GRUPO2].dbo.TM_USUARIO (
	IDUSUARIO int IDENTITY(1,1) NOT NULL,
	EMAIL VARCHAR(64) NOT NULL,
	PASSWORDUSUARIO VARCHAR(128) NOT NULL,
	IDPERFIL INT NOT NULL,
	NOMBRES varchar(64) NULL,
	APELLIDOS varchar(100) NULL,
	DOCUMENTOIDENTIDAD VARCHAR(16),		
	TELEFONO varchar(20) NULL,
	IDEMPRESA int NULL,
	ACTIVO bit NULL,
	USUARIOCREA int NULL,	
	USUARIOMODIFICA int NULL,
	FECHACREA datetime NULL,
	FECHAMODIFICA datetime NULL,
	CONSTRAINT PK__TM_USUA__0C889540EFD2AA62 PRIMARY KEY (IDUSUARIO)
);

INSERT INTO TM_USUARIO(EMAIL, PASSWORDUSUARIO, IDPERFIL, NOMBRES, APELLIDOS, TELEFONO) 
VALUES('nicolasbncruz@gmal.com', '1234', 1, 'Nicolas', 'Cruz', '987654321')
GO

----------------------------------------------------------------------
--PROCEDIMIENTOS ALMACENADOS
----------------------------------------------------------------------

USE [EA2A-GRUPO2];
CREATE PROCEDURE dbo.sp_InsertarUsuario
(
	@IDUSUARIO INT OUTPUT,
	@EMAIL VARCHAR(64),
	@PASSWORDUSUARIO VARCHAR(128),
	@IDPERFIL INT,
	@NOMBRES VARCHAR(64),
	@APELLIDOS varchar(100),
	@DOCUMENTOIDENTIDAD VARCHAR(16),	
	@ACTIVO bit,
	@TELEFONO varchar(20),
	@IDEMPRESA int,	
	@USUARIOCREA int
)
AS
INSERT INTO TM_USUARIO( EMAIL,
	PASSWORDUSUARIO,
	IDPERFIL,
	NOMBRES,
	APELLIDOS,
	DOCUMENTOIDENTIDAD,		
	TELEFONO,
	IDEMPRESA,	
	ACTIVO,
	USUARIOCREA,
	FECHACREA)
VALUES( @EMAIL,
	@PASSWORDUSUARIO,
	2,
	@NOMBRES,
	@APELLIDOS,
	@DOCUMENTOIDENTIDAD,		
	@TELEFONO,
	@IDEMPRESA,	
       	1,
	@USUARIOCREA,
	GETDATE())

SET @IDUSUARIO = SCOPE_IDENTITY()
GO

CREATE PROCEDURE dbo.sp_user_login
(
@EMAIL VARCHAR(64),
@PASSWORDUSUARIO VARCHAR(128)
)
AS 
SELECT	U.IDUSUARIO,
		U.EMAIL,
		U.PASSWORDUSUARIO,
		U.IDPERFIL,
		U.NOMBRES,
		U.APELLIDOS,
		U.DOCUMENTOIDENTIDAD,
		U.ACTIVO,
		U.USUARIOCREA,
		U.USUARIOMODIFICA,
		U.FECHACREA,
		U.FECHAMODIFICA
FROM TM_USUARIO U
WHERE U.EMAIL = @EMAIL AND U.PASSWORDUSUARIO = @PASSWORDUSUARIO
GO


USE [EA2A-GRUPO2];
CREATE PROCEDURE dbo.sp_Million_ListarProyectos
AS 
	SELECT	P.IDPROYECTO,
			P.DESCRIPCION,
			P.TIPOPROYECTO,
			E.RAZONSOCIAL AS EMPRESA,
			P.AREAEMPRESA,
			P.JEFEPROYECTO,
			S.NOMBRE AS SERVICIO,
			P.FECHAINICIOPLAN,
			P.FECHAINICIOREAL,
			P.FECHAFINPLAN,
			P.FECHAFINREAL,
			P.PROGRESOPROYECTO,
			P.ACTIVO,
			P.USUARIOCREA,
			P.USUARIOMODIFICA,
			P.FECHACREA,
			P.FECHAMODIFICA
	FROM	[EA2A-GRUPO2].dbo.TM_PROYECTO P
	INNER JOIN [EA2A-GRUPO2].dbo.TM_EMPRESA E
	ON P.IDEMPRESA = E.IDEMPRESA
	INNER JOIN [EA2A-GRUPO2].dbo.TM_SERVICIO S
	ON P.IDSERVICIO = S.IDSERVICIO;


USE [EA2A-GRUPO2];
CREATE PROCEDURE dbo.sp_Million_ListarEmpresas
AS 
	SELECT	E.IDEMPRESA,
			E.RUC,
			E.RAZONSOCIAL,
			E.RUTAIMAGEN,
			E.EMAIL,
			E.DIRECCION,
			E.ACTIVO,
			E.USUARIOCREA,
			E.USUARIOMODIFICA,
			E.FECHACREA,
			E.FECHAMODIFICA
	FROM	[EA2A-GRUPO2].dbo.TM_EMPRESA E;

EXEC dbo.sp_Million_ListarEmpresas;

USE [EA2A-GRUPO2];
CREATE PROCEDURE dbo.sp_Million_ListarServicios
AS 
	SELECT	S.IDSERVICIO,
			S.NOMBRE,
			S.DESCRIPCION,
			S.RUTAIMAGEN,
			S.ACTIVO,
			S.USUARIOCREA,
			S.USUARIOMODIFICA,
			S.FECHACREA,
			S.FECHAMODIFICA
	FROM	[EA2A-GRUPO2].dbo.TM_SERVICIO S;

EXEC dbo.sp_Million_ListarServicios;
