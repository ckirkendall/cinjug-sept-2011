package org.cinjug.prez;


public class GameStateTracker {
	private int totalMoves=0;
	private int highestMove=0;
	private Player winner=null;
	private String lastMoverFName=null;
	private String lastMoverLName=null;

	public int getTotalMoves() {
		return totalMoves;
	}
	public void incrementTotalMoves() {
		this.totalMoves++;
	}
	public int getHighestMove() {
		return highestMove;
	}
	public void setHighestMove(int highestMove) {
		this.highestMove = highestMove;
	}
	public Player getWinner() {
		return winner;
	}
	public void setWinner(Player winner) {
		this.winner = winner;
	}
	public String getLastMoverFName() {
		return lastMoverFName;
	}
	public void setLastMoverFName(String lastMoverFName) {
		this.lastMoverFName = lastMoverFName;
	}
	public String getLastMoverLName() {
		return lastMoverLName;
	}
	public void setLastMoverLName(String lastMoverLName) {
		this.lastMoverLName = lastMoverLName;
	}
	
	@Override
	public String toString() {
		return "GameStateTracker [totalMoves=" + totalMoves + ", highestMove="
				+ highestMove + ", lastMoverFName=" + lastMoverFName
				+ ", lastMoverLName=" + lastMoverLName + "]";
	}
	
	
}