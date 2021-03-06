<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Websummit 2016</title>

        <link href="{{ url('/css/app.css') }}" rel="stylesheet">
    </head>
    <body>
    <div id="app" class="ui vertical stripe segment">
        <div class="ui container">
            <div id="content" class="ui basic segment">
                <h3 class="ui header">List of Startups</h3>
                <vuetable api-url="/api/v1/startups" :fields="columns" data-path="data" pagination-path=""></vuetable>
            </div>
        </div>
    </div>

    <script src="{{ url('/js/app.bundle.js') }}"></script>
    </body>
</html>
