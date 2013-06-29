<?php

session_start();

if (isset($_POST['user']) && isset($_POST['pass'])) {
	if ($_POST['user'] == 'username' && $_POST['pass'] == 'password') {
		session_regenerate_id();
		$_SESSION['user'] = 'username';
	}
}

?>
<html>
<head>
	<title>CasperJS</title>
</head>
<body bgcolor="#ccc">
<?php

if (isset($_SESSION['user'])) {
	echo '<div id="message-logged">logged in</div>';
}

?>
<div class="login-form">
	<form action="" method="post">
		user: <input type="text" name="user"/><br/>
		pass: <input type="password" name="pass"/><br/>
		<input type="submit" value="login"/>
	</form>
</div>

<iframe src="http://localhost/casperjs/iframe.html"></iframe>

<script type="text/javascript">
	var myNumber = {id:42};
</script>

</body>
</html>