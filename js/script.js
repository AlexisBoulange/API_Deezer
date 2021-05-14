$(document).ready(() =>{

    $("#submit").click(()=>{
        $.ajax({
            url: 'https://api.deezer.com/search?q='+ $("#artist").val() + '&output=jsonp&limit=50',
            dataType: 'jsonp',
            success: function(apiResponse){
                console.log(apiResponse)
                $("#result").html(
                    "<h1>"+ apiResponse.data[0].artist.name + "<h1>" +
                    "<img src='"+ apiResponse.data[0].artist.picture_medium + "'>"
                )
                $("#albums").html("<table id='list-albums'><thead><tr><th>COVER</th><th>TITRE</th></thead><tbody>")
                for(i in apiResponse.data){
                    $('#list-albums').append(
                        "<tr>" +
                        "<td><img src='" + apiResponse.data[i].album.cover_medium + "'></td>" +
                        "<td>" + apiResponse.data[i].album.title + "</td>" +
                        "</tr>"
                    )
                }
                $("#albums").append("</tbody></table>")
            }
        });
    })
})