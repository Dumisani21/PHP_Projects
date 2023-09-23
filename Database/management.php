<?php include_once "header.php" ?>
<body>
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


    <!-- Error Message -->
    <div class="error-msg text-light p-3">
        
    </div>


    <div class="form-management p-3 bg-light position-fixed">
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
                <button type="submit" class="btn save text-light btn-primary">Save</button>
                <button type="reset" class="btn discard text-light btn-danger">Discard</button>
            </div>
        </form>
    </div>

   
    <!-- Javascript links -->
    <!-- <script src="./js/bootstrap.js"></script> -->
    <script src="./js/management.js"></script>
</body>
</html>