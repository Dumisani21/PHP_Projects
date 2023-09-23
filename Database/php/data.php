<?php 
    include_once "conn.php";
    $sql = mysqli_query($conn, "SELECT * FROM client");
    $output = "";
    if(mysqli_num_rows($sql) == 0){
        $output .= "No users are available in the database";
    }elseif(mysqli_num_rows($sql) > 0){
        while($row = mysqli_fetch_assoc($sql)){
  
            $output .= '<tr>
                            <th scope="row">'.$row['user_id'].'</th>
                            <td id="fname">'.$row['firstname'].'</td>
                            <td id="lname">'.$row['lastname'].'</td>
                            <td id="email">'.$row['email'].'</td>
                            <td>
                                <button id="editBtn" class="btn bg-success">
                                    <li class="fa fa-edit"></li>
                                </button>
                            </td>
                            <td>
                                <button id="delBtn" class="btn bg-danger">
                                    <li class="fa fa-minus-circle"></li>
                                </button>
                            </td>
                        </tr>'  ;
        }
    }

    echo $output;
?>