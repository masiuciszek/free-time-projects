<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>app php</title>
    <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css">

    <script>
        function showSuggestion(str){
           if(str.length == 0){
               document.getElementById('output').innerHTML = '';
           } else {
               // AJAX req
               let xmlHttp = new XMLHttpRequest();
               xmlHttp.onreadystatechange = function(){
                   if(this.readyState === 4 && this.status === 200){
                       document.getElementById('output').innerHTML = this.responseText;

                   }
               }
               xmlHttp.open('GET', "suggest.php?q=" + str, true);
               xmlHttp.send();
           }
        }


    </script>

</head>
<body>
<div class="container">
	    <h1>Search Users</h1>
	    <form>
	    	Search User: <input type="text" class="form-control" onkeyup="showSuggestion(this.value)">
	    </form>
	    <p>Suggestions: <span id="output" style="font-weight:bold"></span></p>
</div>

</body>
</html>