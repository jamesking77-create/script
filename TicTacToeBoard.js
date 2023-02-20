

         let  populateBoard = function (){
        let tic_tac_toe_board = Object()

        tic_tac_toe_board["00"] = {row: 0, col: 0, value: "X"}
        tic_tac_toe_board["01"] = {row: 0, col: 1, value: "X"}
        tic_tac_toe_board["02"] = {row: 0, col: 2, value: "O"}
        tic_tac_toe_board["10"] = {row: 1, col: 0, value: "O"} 
        tic_tac_toe_board["12"] = {row: 1, col: 2, value: "X"}
        tic_tac_toe_board["20"] = {row: 2, col: 0, value: "X"}
        tic_tac_toe_board["21"] = {row: 2, col: 1, value: "O"}
        tic_tac_toe_board["22"] = {row: 2, col: 2, value: "O"}

        let gameBoard = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]; 
        
        for (let key in tic_tac_toe_board) {
            gameBoard[key.charAt(0)][key.charAt(1)] =  tic_tac_toe_board[key].value

            }
            return gameBoard;
        }


        console.table(populateBoard())
            
