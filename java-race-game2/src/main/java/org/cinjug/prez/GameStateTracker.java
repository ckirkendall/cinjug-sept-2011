package org.cinjug.prez;

import java.util.concurrent.locks.ReentrantReadWriteLock;


public class GameStateTracker {
	private int totalMoves=0;
	private int highestMove=0;
	private Player winner=null;
	private String lastMoverFName=null;
	private String lastMoverLName=null;
	ReentrantReadWriteLock rwl = new ReentrantReadWriteLock();

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
		rwl.readLock().lock();
		try{
			return winner;
		}finally{
			rwl.readLock().unlock();
		}
	}
	public boolean isWinner(Player winner) {
		boolean result=false;
		rwl.writeLock().lock();
		try{
			if(this.winner==null){
				this.winner=winner;
				result=true;
			}
		}finally{
			rwl.writeLock().unlock();
		}
		return result;
		
	}
	
	public String getLastMoverFName() {
		rwl.readLock().lock();
		try{
			return lastMoverFName;
		}finally{
			rwl.readLock().unlock();
		}
		
	}
	
	public String getLastMoverLName() {
		rwl.readLock().lock();
		try{
			return lastMoverLName;
		}finally{
			rwl.readLock().unlock();
		}
	}
	
	
	public void playerMove(Player player){
		rwl.writeLock().lock();
		try{
			incrementTotalMoves();
			lastMoverFName=player.getFirstName();
			lastMoverLName=player.getLastName();
			if(player.getMoves()>this.highestMove){
				this.highestMove=player.getMoves();
			}
		}finally{
			rwl.writeLock().unlock();
		}
	}
	
	@Override
	public String toString() {
		rwl.readLock().lock();
		try{
			return "GameStateTracker [totalMoves=" + totalMoves + ", highestMove="
			+ highestMove + ", lastMoverFName=" + lastMoverFName
			+ ", lastMoverLName=" + lastMoverLName + "]";
		}finally{
			rwl.readLock().unlock();
		}
	}
	
	
}