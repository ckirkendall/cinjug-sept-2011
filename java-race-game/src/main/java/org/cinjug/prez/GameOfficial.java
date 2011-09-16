package org.cinjug.prez;

import org.cinjug.prez.beans.GameStateTracker;
import org.cinjug.prez.beans.Player;

public class GameOfficial {
	final private StringBuilder gameLog=new StringBuilder();
	
	public String getGameLog() {
		return gameLog.toString();
	}

	public void monitorGame(final Game game){
		final GameStateTracker tracker=game.getTracker();
		
		Runnable monitor=new Runnable() {
            public void run() {
                try {
                	System.out.println("starting the monitor");
                	while(tracker.getWinner()==null){
                		Thread.sleep(10);
                    	gameLog.append(tracker.toString()).append('\n');
                    	
                	}
                	Player winner=tracker.getWinner();
                	gameLog.append("AND THE WINNER IS: ").append(winner.toString());
                	
                	while(!game.isGameFinished()){
                		Thread.sleep(10);
                	}
                	for(Player player : game.getPlayers()){
                		gameLog.append(player.toString());
                		gameLog.append(": ");
                		gameLog.append(player.getResponse());
                	}
                
                } catch (Exception e) {
                	System.out.println(e.getMessage());
                    e.printStackTrace();
                }
                
            }
        };
        Thread monitorThread=new Thread(monitor);
        monitorThread.start();
	}
	
}
