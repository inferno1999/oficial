<?php 
	/* Desarrollado por: PROGRAMANDO BROTHERS 	
	Suscribete a : https://www.youtube.com/ProgramandoBrothers y comparte los v�deos.
	Recuerda: "EL CONOCIMIENTO SE COMPARTE, POR M�S POCO QUE SEA".
	*/
	sleep(1);
	include_once('conexion.php');
	$sql = "SELECT * FROM cartas WHERE estado = 1;";
	$res = mysqli_query($conn,$sql);
	$ide = "";
	echo "<div id='pad-wrapper' class='datatables-page' style='margin-top:0px;'>";            
	echo "           <div class='row'>";
	echo "               <div class='col-md-8'>";
	echo "                    <table id='example' class='table table-hover'>";
	echo "                        <thead>";
	echo "                            <tr>";
	echo "                                <th style = 'display:none;' tabindex='0' rowspan='1' colspan='1'>ID</th>";
	echo "                                <th tabindex='0' rowspan='1' colspan='1'>Fecha</th>";
	echo "                                <th tabindex='0' rowspan='1' colspan='1'>Remitente</th>";
	echo "                                <th tabindex='0' rowspan='1' colspan='1'>Motivo</th>";
	echo "                            </tr>";
	echo "                        </thead>";
	echo "                        <tbody>";
			while ($clientes = mysqli_fetch_array($res)) {
	echo "                            <tr>";
	echo "                                <td style = 'display:none;'>$clientes[0]</td>";
	echo "                                <td>".$clientes[1]."</td>";
	echo "                                <td>".$clientes[2].' '.$clientes[3]."</td>";
	echo "                                <td>".$clientes[4].' '.$clientes[5]."</td>";
	echo "                            </tr>";
			}
	echo "                        </tbody>";
	echo "                    </table>";
	echo "                </div>";
	echo "            </div>";
	echo "        </div>";

	
 ?>