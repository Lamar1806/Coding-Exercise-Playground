<?php

class LeagueTable
{
    public function __construct(array $players)
    {
        $this->standings = [];
        foreach($players as $index => $p) {
            $this->standings[$p] = [
                'index'        => $index,
                'games_played' => 0,
                'score'        => 0
            ];
        }
    }

    public function recordResult(string $player, int $score) : void
    {
        $this->standings[$player]['games_played']++;
        $this->standings[$player]['score'] += $score;
    }

    public function playerRank(int $rank) : string
    {
        echo print_r($this->standings);
        //Sort by fewest games heighest score and lowest array index
        $rankingList = [];
        $playerGames = array();
        foreach($this->standings as $key => $val){
           
            array_push($playerGames, $key,  $val['games_played'] );
        }
        echo $playerGames;
        return $rankingList[$rank+1];
    }
}

$table = new LeagueTable(array('Mike', 'Chris', 'Arnold'));
$table->recordResult('Mike', 2);
$table->recordResult('Mike', 3);
$table->recordResult('Arnold', 5);
$table->recordResult('Chris', 5);
echo $table->playerRank(1);

//should return chris
// hieghest score
// fewest games
// lowest array index