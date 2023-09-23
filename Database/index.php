<?php include_once "header.php" ?>
<body>
    <div class="forms-filter"></div>
    <div class="navbar bg-dark">
        <div class="navbar-brand">
            <li class="fa fa-database" style="color: #fff; font-size: 30px;"></li>
            <h3 class="navbar-text m-1" style="color: #fff;">My Database</h3>
        </div>
        <ul class="nav">
            <li class="nav-item">
                <a href="index.php" class="nav-link text-light">Home</a>
            </li>
            <li class="nav-item">
                <a href="management.php" class="nav-link text-warning">Management</a>
            </li>
        </ul>
    </div>

    <!-- Edit data box -->
    <div class="container forms p-3 bg-secondary position-fixed">
        <form action="#">
            <div class="form-group">
                <input class="form-control" type="text" name="fname"
                 placeholder="firstname" id="fname" required>
            </div>
            <div class="form-group">
                <input class="form-control" type="text" name="lname"
                 placeholder="lastname" id="lname" required>
            </div>
            <div class="form-group">
                <input class="form-control" type="email" name="email"
                 placeholder="email" id="email" required>
            </div>
            <div class="buttons">
                <button type="button" class="btn save text-light btn-primary">Save</button>
                <button type="button" class="btn discard text-light btn-danger">Discard</button>
            </div>
        </form>
    
    </div>
    <div class="container-fluid">
        <table class="table table-hover text-center table-responsive-sm">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">last</th>
                    <th scope="col">email</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Del</th>
                </tr>
            </thead>
            <tbody class="tableBody">
              
            </tbody>
        </table>    
    </div>

    <!-- Javascript links -->
    <!-- <script src="./js/bootstrap.js"></script> -->
    <script src="./js/app.js"></script>
</body>
</html>