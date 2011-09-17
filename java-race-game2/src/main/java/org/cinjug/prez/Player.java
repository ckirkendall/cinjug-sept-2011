package org.cinjug.prez;

import java.util.concurrent.locks.ReentrantReadWriteLock;


public class Player {
	private final String firstName;	
	private final String lastName;
	private String response=null;
	private boolean finished=false;
	private int moves=0;
	ReentrantReadWriteLock rwl = new ReentrantReadWriteLock();
	
	Player(String fname, String lname){
		firstName=fname;
		lastName=lname;
	}
	
	private void move(GameStateTracker tracker, int maxMoves){
		if(getMoves()<maxMoves){
			incrementMoves();
			tracker.playerMove(this);
		}else if(getMoves()==maxMoves && tracker.isWinner(this)){
			setResponse("COOL I WON!!!!");
			setFinished(true);
		}else{
			setResponse("I lost...");
			setFinished(true);
		}
	}
	
	public void startMoving(final GameStateTracker tracker, final int maxMoves){
		new Thread(new Runnable() {
            public void run() {
                try {
                	while(!finished){
                		Thread.sleep(2);
                		move(tracker,maxMoves);
                	}
                } catch (Exception e) {
                    e.printStackTrace();
                }
                
            }
        }).start();
	}
	
	public String getFirstName() {
		return firstName;
	}
	
	public String getLastName() {
		return lastName;
	}
	
	public String getResponse() {
		rwl.readLock().lock();
		try{
			return response;
		}finally{
			rwl.readLock().unlock();
		}
	}
	
	public void setResponse(String response) {
		rwl.writeLock().lock();
		try{
			this.response = response;
		}finally{
			rwl.writeLock().unlock();
		}
	}
	
	public int getMoves() {
		rwl.readLock().lock();
		try{
			return moves;
		}finally{
			rwl.readLock().unlock();
		}
	}
	public void incrementMoves() {
		rwl.writeLock().lock();
		try{
			this.moves++;
		}finally{
			rwl.writeLock().unlock();
		}
	}
	
	public boolean isFinished(){
		rwl.writeLock().lock();
		try{
			return this.finished;
		}finally{
			rwl.writeLock().unlock();
		}
	}
	
	private void setFinished(boolean fin){
		rwl.writeLock().lock();
		try{
			this.finished=fin;
		}finally{
			rwl.writeLock().unlock();
		}
	}

	@Override
	public String toString() {
		return firstName + " " + lastName;
	}
	
	
}
