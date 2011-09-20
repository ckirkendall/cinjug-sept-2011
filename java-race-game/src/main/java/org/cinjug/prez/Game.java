package org.cinjug.prez;

import java.util.ArrayList;
import java.util.List;


/**
 * Hello world!
 *
 */
public class Game {
    private GameStateTracker tracker=null;
    private List<Player> players=new ArrayList<Player>();
    private GameOfficial official=null;
    int maxMoves=0;
    
    
    public void registerPlayer(Player newPlayer){
    	players.add(newPlayer);
    }
    
    public void startGame(){
    	tracker=new GameStateTracker();
    	for(Player player : players){
    		player.startMoving(tracker, maxMoves);
    	}
    	official.monitorGame(this);
    }

    public boolean isGameFinished(){
    	boolean finished=true;
    	for(Player player : players){
    		finished=player.isFinished();
    		if(!finished){
    			break;
    		}
    	}
    	return finished;
    }
    
	public GameOfficial getOfficial() {
		return official;
	}


	public void setOfficial(GameOfficial official) {
		this.official = official;
	}


	public int getMaxMoves() {
		return maxMoves;
	}


	public void setMaxMoves(int maxMoves) {
		this.maxMoves = maxMoves;
	}

	public GameStateTracker getTracker() {
		return tracker;
	}

	public void setTracker(GameStateTracker tracker) {
		this.tracker = tracker;
	}

	public List<Player> getPlayers() {
		return players;
	}

	public void setPlayers(List<Player> players) {
		this.players = players;
	}
    
    
   public static void main(String args[]){
     try {
		long startTime=System.currentTimeMillis();
		Game game = new Game();
		game.setMaxMoves(1000);
		game.setOfficial(new GameOfficial());
		for (int i = 0; i < 20; i++) {
			Player p = new Player();
			p.setFirstName("fn" + i);
			p.setLastName("ln" + i);
			game.registerPlayer(p);
		}
		game.startGame();
		while (!game.isGameFinished()) {
			Thread.sleep(100);
		}
		System.out.println(game.getOfficial().getGameLog());

		long runTime=(System.currentTimeMillis()-startTime);
		System.out.println("Execution Time: "+runTime);
	} catch (Exception e) {
		e.printStackTrace();
	}
	   
   }
}
