<?php
    

    include_once "conn.php";
    $fname = mysqli_real_escape_string($conn, $_POST['fname']);
    $lname = mysqli_real_escape_string($conn, $_POST['lname']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);


    if(!empty($fname) && !empty($lname) && !empty($email)){

        if(filter_var($email, FILTER_VALIDATE_EMAIL)){
            $sql = mysqli_query($conn, "SELECT email FROM client WHERE email = '{$email}'");
            if(mysqli_num_rows($sql) > 0){
                echo "$email - already exist!";
            }else{
                $sql2 = mysqli_query($conn, "INSERT INTO client (firstname, lastname, email)
                    VALUES ('{$fname}', '{$lname}', '{$email}')");
                    if($sql2){
                        echo "success";
                    }else{
                        echo "Something went wrong!";
                    }
            }
        }else{
            echo "This is not a valid email!";
        }
        
    }else {
        echo "Please fill in all required fields!";
    }
?>