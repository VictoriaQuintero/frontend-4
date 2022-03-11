<?php
    require('conection.php');

    if(isset($_POST['correo'])){

        $email = $_POST['correo'];
        $nombre = $_POST['nombre'];
        $clave = $_POST['clave'];

        $query= "INSERT INTO `personas`( `nombre`, `correo`, `clave`) VALUES ('$nombre','$email', '$clave');";
        $action= mysqli_query($conection, $query);

        if(!$action){
            die('ha ocurrido un error' . mysqli_error($conection));
        }else{
         echo 'Agregado!';   
        }
    }
?>