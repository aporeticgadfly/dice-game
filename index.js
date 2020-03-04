
    player1 = Math.floor(Math.random() * 6 + 1);
    player2 = Math.floor(Math.random() * 6 + 1);

    console.log(player1);
    console.log(player2);

    var imgSource1 = "images/dice"+ player1 +".png";
    var imgSource2 = "images/dice"+ player2 +".png";

    console.log(imgSource1);
    console.log(imgSource2);

    $(".imgPlayer1").attr("src", imgSource1);
    $(".imgPlayer2").attr("src", imgSource2);

    console.log($(".imgPlayer1").attr("src"));
    console.log($(".imgPlayer2").attr("src"));


    if(player1 > player2)
    {
      $("h1").text("Player 1 Wins!");
    }
    else if(player1 < player2)
    {
      $("h1").text("Player 2 Wins!");
    }
    else {
      $("h1").text("Tie!");
    }
