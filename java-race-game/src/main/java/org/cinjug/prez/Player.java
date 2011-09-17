package org.cinjug.prez;


public class Player {
	private String firstName=null;	
	private String lastName=null;
	private String response=null;
	private boolean finished=false;
	private int moves=0;
	
	private void move(GameStateTracker tracker, int maxMoves){
		if(moves<maxMoves){
			moves++;
			tracker.incrementTotalMoves();
			tracker.setLastMoverFName(firstName);
			tracker.setLastMoverLName(lastName);
		}else if(moves==maxMoves && tracker.getWinner()==null){
			response="COOL I WON!!!!";
			tracker.setWinner(this);
			this.finished=true;
		}else{
			response="I lost...";
			this.finished=true;
		}
	}
	
	public void startMoving(final GameStateTracker tracker, final int maxMoves){
		new Thread(new Runnable() {
            public void run() {
                try {
                	while(response==null){
                		Thread.sleep(5);
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
