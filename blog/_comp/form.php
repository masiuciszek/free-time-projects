<form action="<?php $_SERVER['PHP_SELF'];?>" method="post">
    <div class="form-group">
        <label>TITLE</label>
        <input type="text" name="title" class="form-control">
    </div>
    <div class="form-group">
        <label>AUTHOR</label>
        <input type="text" name="author" class="form-control">
    </div>
    <div class="form-group">
        <label>BODY</label>
        <textarea name="body" id="" cols="30" rows="10" class="form-control"></textarea>
    </div>
    <input type="submit" name="submit" value="Submit" class="btn btn-info">
</form>