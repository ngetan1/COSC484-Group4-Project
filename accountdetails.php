<!DOCTYPE html>
<html lang=“en”>
<head>
<title>TU TutorConnect Account Details </title>
<meta charset=“utf-8”>
<link rel = "stylesheet" type = "text/css" href = "accountdetails.css"/>
</head>
<body>
<table> 
<div id = "account-details">
	<tr>
		<th>Towson ID</th> 
		<th>Email</th>
		<th>First Name</th>
		<th>Last Name</th>
		<th>Teacher?</th>
	</tr>
	<?php
	$conn = mysqli_connect("us-cdbr-iron-east-05.cleardb.net", "b4179bf089dd31", "45c8f550", "heroku_60e48b8f73ee0e3"); //server name, username, password, database name
	if ($conn-> connect_error) {
		die ("Connection failed:". $conn-> connect_error);
	}
	
	$sql = "SELECT UserID, Email, FName, LName, IsTeacher from account";
	$result = $conn -> query($sql);
	
	if ($result -> num_rows > 0) {
		while ($row = $result-> fetch_assoc()) {
			echo "<tr><td>". $row["uid"]."</td><td>". $row["email"]."</td><td>". $row["fname"]."</td><td>". $row["lname"]."</td></tr>". $row["isteach"]."</td></tr>";
		}
		echo "</table>";
	} else {
		echo "0 result";
	}
	
	$conn->close();
	?>
</table>
</div>
</body>

</html>

