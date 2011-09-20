package org.cinjug.prez;


public class Player {
	private String firstName=null;	
	private String lastName=null;
	private String response=null;
	private boolean finished=false;
	private int moves=0;
	
	private void move(GameStateTracker tracker, int maxMoves){
		moves++;
		tracker.incrementTotalMoves();
		tracker.setLastMoverFName(firstName);
		tracker.setLastMoverLName(lastName);
	}
	
	public void startMoving(final GameStateTracker tracker, final int maxMoves){
		final Player current=this;
		new Thread(new Runnable() {
            public void run() {
                try {
                	while(moves<maxMoves){
                		Thread.sleep(2);
                		move(tracker,maxMoves);
                	}
                	if(tracker.getWinner()==null){
                		response="COOL I WON!!!!";
            			tracker.setWinner(current);
                	}else{
                		response="I lost...";
                	}
                	finished=true;
                } catch (Exception e) {
                    e.printStackTrace();
                }
                
            }
        }).start();
	}
	
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getResponse() {
		return response;
	}
	public void setResponse(String response) {
		this.response = response;
	}
	public int getMoves() {
		return moves;
	}
	public void setMoves(int moves) {
		this.moves = moves;
	}
	
	public boolean isFinished(){
		return this.finished;
	}

	@Override
	public String toString() {
		return firstName + " " + lastName;
	}
	
	
}
