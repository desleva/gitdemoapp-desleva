

<?php
   session_start();
   if (! isset($_SESSION['name'])) {
      if (isset($_POST['uname'])){
         $username = $_POST['uname'];
         $pswd = $_POST['pswd'];

         $conn=pg_connect("host=localhost dbname=corporate user=root password=") or die(pg_last_error($conn));

         $query = "SELECT name FROM users WHERE uname='uname' AND pswd='$pswd'";
         $result = pg_query($conn, $query);
         if (pg_num_rows($result) == 1){
            $_SESSION['name'] = pg_fetch_result($result,0,'name');
            $_SESSION['uname'] = pg_fetch_result($result,0,'uname');
            echo "You're logged in. Feel free to return at a later time.";
         }
      } else {
         include "login.html";
      }
   } else {
       $name = $_SESSION['name'];
       echo "Welcome back, $name!";
    }
?>
