# Finding Pi Challenge

Only using a uniform random generator (0,1) and basic mathematic operators (+ - * /) to determine value of Pi.

## Description of solution 

Assuming we have a coordinate axis x and y. Imaging an squre S that has four edge points:[0,0], [1,0], [0,1], [1,1] with the certer is [0.25, 0.25]. If we draw a circle C with the ceter of S and the r equals 0.25. Then we sould have C that exactly tangents the sides of the S. 

If we can find the area of C then we can easily using area =  p * r^2 to finde the solution. Since we already know the area of S which is 1. Thus the problem is how to find area of C by using area of S.

There are infinite points within S. We found that those points which falling within C has such attributes that the distance of each points to center will be less or equal to 0.25. Thus we can randomly draft a set of points to find out how many points are falling within the circle. Using numbers of points to represent the area. 

## In details 

Two arbitrary values: times of drafting the sample, size of the sample. The larger the better. Saying we draft 10000 points within the square area and some of them are falling within the circle. We can calculate a value of pi using the area equation. Saying we draft 100 times then we should have 100 of pseudo value of Pi. Then we can set up the confidence interval (95%) with z value of 1.96 and the known standard deviation. Then we calculate the lower and upper bond using the following equation.
![equation](https://i.imgur.com/s69UrRD.png)

## Running the program
Only need to set two parameters: times of drafting the sample, size of the sample. The confidence interval is also adjustable if you want to change the value of z. 
```
node pi.js
```
