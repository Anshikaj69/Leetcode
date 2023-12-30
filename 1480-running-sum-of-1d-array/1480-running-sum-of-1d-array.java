class Solution {
    public int[] runningSum(int[] nums) {
        int s= nums.length;
        int[] num= new int[s] ;
        for (int i=0 ; i<(s-1);i++)
            {
            nums[i+1]= nums[i]+nums[i+1];

                
        }
        return nums;
    }
}