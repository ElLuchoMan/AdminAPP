<h1>SAP: Sistema de administración de personas<h1>
<hr/>
  <h4> Para probar el código es necesario dentro de la ruta <code>AdminApp/sap</code> ejecutar el comando <pre> py manage.py runserver</pre>, con lo que se levantará el backend
    y dentro de la ruta <code>AdminApp/sap/sap-app</code> ejecutar el comando <pre>npm run start</pre> para iniciar el front end.<h4>
<h4> Para realizar pruebas, el usuario administrador tiene como credenciales: username:bryan, password: bryan. Existen usuarios comunes; "diana, armando, raul, maria, edwin" cuyas
credenciales son tanto en username como en passowrd, su nombre, ejemplo: username: diana, password: diana.
<h4>Para el manejo de sesiones se usó la librería cookies que permite leer desde el backend si el usuario es admin y guardar este atributo, con lo que se verifica si existe,
para poder acceder a la ruta Resumen y si no existe, pero existe el atributo name, redireccionará a la ruta Principal. Si ninguno de los dos llegara a existir, redireccionará 
automáticamente a la ventana Login.<h4>
<h4>Para el diseño de la tabla se utilizó material-ui y para el diseño de la gráfica se hizo uso de la librería react-vis.<h4>
<h4>Para la página Principal, se cargan el logo, título y descripción desde el backend<h4>
