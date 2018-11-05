class MyCircularQueue {
    private int p_start;
    private int p_end;
    private int size;
    private List<Integer> queue;
    /** Initialize your data structure here. Set the size of the queue to be k. */
    public MyCircularQueue(int k) {
        queue = new ArrayList<Integer>(k);
        p_start = p_end = -1;
        size = k;
    }
    
    /** Insert an element into the circular queue. Return true if the operation is successful. */
    public boolean enQueue(int value) {
        if (isEmpty() == true) {
            p_start = p_end = 0;
            add(value, p_end);
            return true;
        }
        if (isFull() == true) {
            return false;
        }
        p_end = (p_end + 1) % size;
        add(value, p_end);
        return true;
    }
    
    /** Delete an element from the circular queue. Return true if the operation is successful. */
    public boolean deQueue() {
        if (isEmpty() == true) {
            return false;
        }
        if (p_start == p_end) {
            p_start = p_end = -1;
            return true;
        }
        p_start = (p_start + 1) % size;
        return true;
    }
    
    /** Get the front item from the queue. */
    public int Front() {
        if (isEmpty() == true) {
            return -1;
        }
        return queue.get(p_start);
    }
    
    /** Get the last item from the queue. */
    public int Rear() {
        if (isEmpty() == true) {
            return -1;
        }
        return queue.get(p_end);
    }
    
    /** Checks whether the circular queue is empty or not. */
    public boolean isEmpty() {
        return p_start == -1;
    }
    
    /** Checks whether the circular queue is full or not. */
    public boolean isFull() {
        if (p_start == 0) {
            return p_end == size - 1;
        }
        return p_start - p_end == 1;
    }
    
    private void add(int value, int index) {
        if (p_start <= p_end) {
            queue.add(index, value);
        } else {
            queue.set(index, value);   
        }
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * MyCircularQueue obj = new MyCircularQueue(k);
 * boolean param_1 = obj.enQueue(value);
 * boolean param_2 = obj.deQueue();
 * int param_3 = obj.Front();
 * int param_4 = obj.Rear();
 * boolean param_5 = obj.isEmpty();
 * boolean param_6 = obj.isFull();
 */
